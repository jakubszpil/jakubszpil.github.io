import type { AppLoadContext } from "react-router";

declare module "react-router" {
  interface AppLoadContext {
    env: Cloudflare.Env;
  }
}

interface GetLoadContextParams {
  context: {
    cloudflare: {
      env: Cloudflare.Env & {
        ASSETS: typeof fetch;
      };
    };
  };
}

export const getLoadContext = ({
  context,
}: GetLoadContextParams): AppLoadContext => ({
  env: context.cloudflare.env,
});
