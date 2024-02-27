import { PropsWithChildren } from "react";

export default function InspectorLayout({ children }: PropsWithChildren) {
  return (
    <div>
      <div>Inspector column</div>
      <div>{children}</div>
    </div>
  );
}
