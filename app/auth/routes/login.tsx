import type {
  ClientActionFunctionArgs,
  ClientLoaderFunctionArgs,
} from "react-router";

export async function clientLoader({}: ClientLoaderFunctionArgs) {
  return null;
}

export async function clientAction({}: ClientActionFunctionArgs) {
  return null;
}

export default function AuthLogin() {
  return (
    <div>
      <h1>AuthLogin</h1>
    </div>
  );
}
