import lz from "lz-string";
import { useMemo } from "react";
import {
  useLoaderData,
  type ClientLoaderFunctionArgs,
  type LoaderFunctionArgs,
} from "react-router";

type Encoded<T> = string & { sourceType?: T };

export function encode<T>(value: T): Encoded<T> {
  return lz.compress(JSON.stringify(value));
}

export function decode<T>(encoded: Encoded<T>): T {
  return JSON.parse(lz.decompress(encoded));
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
