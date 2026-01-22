import { preloadModule, type PreloadModuleOptions } from "react-dom";

export interface PreloadedScriptProps {
  src: string;
  options?: PreloadModuleOptions;
}

export function PreloadedScript({ src, options }: PreloadedScriptProps) {
  preloadModule(src, options);

  return <script type="module" src={src} />;
}
