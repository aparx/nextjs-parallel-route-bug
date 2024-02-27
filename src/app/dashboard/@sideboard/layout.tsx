import { PropsWithChildren } from "react";

export default function SideboardLayout({ children }: PropsWithChildren) {
  return (
    <div>
      <div>Sideboard column</div>
      <div>{children}</div>
    </div>
  );
}
