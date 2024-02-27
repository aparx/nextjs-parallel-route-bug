import { PropsWithChildren } from "react";

export default function DocumentsLayout({ children }: PropsWithChildren) {
  return (
    <div>
      <div>Documents column</div>
      <div>{children}</div>
    </div>
  );
}
