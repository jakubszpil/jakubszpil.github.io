import { injectScript } from "../utils/scripts";

export interface InlineScriptProps {
  code: string;
}

export function InlineScript({ code }: InlineScriptProps) {
  return <script dangerouslySetInnerHTML={{ __html: injectScript(code) }} />;
}
