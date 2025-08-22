import { useLoaderData, type LoaderFunctionArgs } from "react-router";
import lz from "lz-string";

type Encoded<T> = {
  value: string;
};

export function encode<T>(value: T): Encoded<T> {
  return {
    value: lz.compressToUTF16(JSON.stringify(value)),
  };
}

export function decode<T>(encoded: Encoded<T>): T {
  return JSON.parse(lz.decompressFromUTF16(encoded.value));
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
