import { useLoaderData, type LoaderFunctionArgs } from "react-router";
import lz from "lz-string";

type Encoded<T> = {
  val: string;
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
  ["slug", "s"],
  ["title", "t"],
  ["description", "d"],
  ["keywords", "k"],
  ["createdAt", "cd"],
  ["content", "cn"],
  ["categories", "cts"],
  ["readingTime", "rt"],
  ["status", "st"],
  ["quiz", "qz"],
  ["questions", "qs"],
  ["question", "q"],
  ["answer", "an"],
  ["explanation", "ex"],
  ["options", "opt"],
  ["articles", "as"],
  ["courses", "cs"],
  ["projects", "ps"],
  ["category", "ct"],
  ["technology", "tc"],
  ["technologies", "tcs"],
]);

export function encode<T>(value: T): Encoded<T> {
  return {
    val: lz.compress(JSON.stringify(keyReplacer.replace(value))),
  };
}

export function decode<T>(encoded: Encoded<T>): T {
  return keyReplacer.restore(JSON.parse(lz.decompress(encoded.val)));
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
