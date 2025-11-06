import { injectScript } from "../lib/scripts";

export interface InlineScriptProps {
  code: string;
}

export default function InlineScript(props: InlineScriptProps) {
  return (
    <script dangerouslySetInnerHTML={{ __html: injectScript(props.code) }} />
  );
}
