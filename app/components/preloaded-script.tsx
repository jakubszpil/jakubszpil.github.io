import { preloadModule, type PreloadModuleOptions } from "react-dom";

export interface PreloadedScriptProps {
  src: string;
  options?: PreloadModuleOptions;
}

export default function PreloadedScript(props: PreloadedScriptProps) {
  preloadModule(props.src, props.options);

  return <script type="module" src={props.src} />;
}
