import { useLoaderData, type LoaderFunctionArgs } from "react-router";
import lz from "lz-string";

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
