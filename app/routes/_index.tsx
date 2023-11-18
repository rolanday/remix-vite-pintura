import type { MetaFunction } from "@remix-run/node";
import { PinturaEditor } from "@pqina/react-pintura";
export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div
      style={{
        position: "fixed",
        left: 0,
        top: 0,
        width: "100vw",
        height: "100vh",
        backgroundColor: "black",
      }}
    >
      <PinturaEditor />
    </div>
  );
}
