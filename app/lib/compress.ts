import { useLoaderData, type LoaderFunctionArgs } from "react-router";
import lz from "lz-string";

function compressString(str: string): string {
  return lz.compressToUTF16(str);
}

function decompressString(str: string): string {
  return lz.decompressFromUTF16(str);
}

type Encoded<T> = {
  value: T extends (infer U)[]
    ? { schema: (keyof U)[]; data: Encoded<U>[] }
    : T extends object
      ? { [K in keyof T]: Encoded<T[K]> }
      : T;
};

function encodeValue<T>(value: T): Encoded<T> {
  if (value instanceof Array) {
    if (value.length > 0 && typeof value[0] === "object" && value[0] !== null) {
      const schema = Array.from(
        new Set(value.flatMap((obj) => Object.keys(obj)))
      );
      const data = value.map((obj) => schema.map((k) => encode(obj[k])));
      return { value: { schema, data } } as Encoded<T>;
    }

    return { value: value.map((v) => encode(v)) } as Encoded<T>;
  }

  if (value !== null && typeof value === "object") {
    const result: any = {};
    for (const [k, v] of Object.entries(value)) result[k] = encode(v);
    return { value: result };
  }

  if (typeof value === "string") {
    return { value: compressString(value) } as Encoded<T>;
  }

  return { value } as Encoded<T>;
}

function decodeValue<T>(encoded: Encoded<T>): T {
  const value = encoded.value;

  if (value && typeof value === "object") {
    if ("schema" in value && "data" in value) {
      const schema = value.schema as string[];
      const rows = value.data as any[];
      return rows.map((row) => {
        const obj: any = {};
        schema.forEach((k, i) => {
          if (row[i] !== undefined) obj[k] = decode(row[i]);
        });
        return obj;
      }) as T;
    }
    if (Array.isArray(value)) {
      return value.map((v) => decode(v)) as T;
    }

    const result: any = {};
    for (const [k, v] of Object.entries(value)) result[k] = decode(v);
    return result as T;
  }

  if (typeof value === "string") {
    return decompressString(value) as T;
  }

  return value as T;
}

export function encode<T>(value: T): Encoded<T> {
  return encodeValue(value);
}

export function decode<T>(encoded: Encoded<T>): T {
  return decodeValue(encoded);
}

type MaybeAsync<T> = T | Promise<T>;

type DecodedLoaderData<
  T extends (args: LoaderFunctionArgs) => MaybeAsync<unknown>,
> = T extends (args: LoaderFunctionArgs) => MaybeAsync<infer X>
  ? X extends Encoded<infer Y>
    ? Y
    : X
  : unknown;

export function useDecodedLoaderData<
  T extends (args: LoaderFunctionArgs) => MaybeAsync<unknown>,
>(): DecodedLoaderData<T> {
  const loaderData = useLoaderData();
  const data = decode<DecodedLoaderData<T>>(loaderData);
  return data;
}
