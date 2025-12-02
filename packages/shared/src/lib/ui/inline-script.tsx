import { injectScript } from "../utils/scripts";

export interface InlineScriptProps {
  code: string;
}

export function InlineScript(props: InlineScriptProps) {
  return (
    <script dangerouslySetInnerHTML={{ __html: injectScript(props.code) }} />
  );
}
