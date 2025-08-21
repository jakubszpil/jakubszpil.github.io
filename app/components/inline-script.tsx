export interface InlineScriptProps {
  code: string;
}

export default function InlineScript(props: InlineScriptProps) {
  return <script dangerouslySetInnerHTML={{ __html: props.code }}></script>;
}
