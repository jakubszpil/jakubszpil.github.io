import lz from "lz-string";
import { useMemo } from "react";
import {
  useLoaderData,
  type ClientLoaderFunctionArgs,
  type LoaderFunctionArgs,
} from "react-router";

type Encoded<T> = {
  v: string;
};

class KeyReplacer {
  constructor(private pairs: Array<[string, string]>) {}

  replace<T>(obj: T): T {
    let str = JSON.stringify(obj);
    for (const [currentKey, newKey] of this.pairs)
      str = str.replaceAll(`"${currentKey}":`, `"${newKey}":`);
    return JSON.parse(str);
  }

  restore<T>(obj: T): T {
    let str = JSON.stringify(obj);
    for (const [currentKey, newKey] of this.pairs)
      str = str.replaceAll(`"${newKey}":`, `"${currentKey}":`);
    return JSON.parse(str);
  }
}

const keyReplacer = new KeyReplacer([
  ["slug", "a"],
  ["title", "b"],
  ["description", "c"],
  ["keywords", "d"],
  ["createdAt", "e"],
  ["content", "f"],
  ["categories", "g"],
  ["readingTime", "h"],
  ["status", "i"],
  ["quiz", "j"],
  ["questions", "k"],
  ["question", "l"],
  ["answer", "m"],
  ["explanation", "n"],
  ["options", "o"],
  ["articles", "p"],
  ["courses", "r"],
  ["projects", "s"],
  ["category", "t"],
  ["technology", "u"],
  ["technologies", "w"],
]);

export function encode<T>(value: T): Encoded<T> {
  return {
    v: lz.compress(JSON.stringify(keyReplacer.replace(value))),
  };
}

export function decode<T>(encoded: Encoded<T>): T {
  return keyReplacer.restore(JSON.parse(lz.decompress(encoded.v)));
}

type MaybeAsync<T> = T | Promise<T>;

type Loader<T> =
  | ((args: ClientLoaderFunctionArgs) => MaybeAsync<T>)
  | ((args: LoaderFunctionArgs) => MaybeAsync<T>);

type DecodedLoaderData<T extends Loader<unknown>> =
  T extends Loader<infer X> ? (X extends Encoded<infer Y> ? Y : X) : unknown;

export function useDecodedLoaderData<
  T extends Loader<unknown>,
>(): DecodedLoaderData<T> {
  const loaderData = useLoaderData();

  const data = useMemo(
    () => decode<DecodedLoaderData<T>>(loaderData),
    [loaderData]
  );

  return data;
}
