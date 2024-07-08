import { createContext, ReactNode, useContext } from "react";

export interface Config {}

export const Config = createContext<Config>({} as Config);

export function useConfig() {
  return useContext(Config);
}

export interface ConfigProviderProps {
  children: ReactNode;
  config: Config;
}

export function ConfigProvider(props: ConfigProviderProps) {
  return (
    <Config.Provider value={props.config}>{props.children}</Config.Provider>
  );
}
