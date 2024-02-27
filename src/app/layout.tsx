import type React from "react";
// noinspection ES6UnusedImports

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang="en">
      <body style={{ background: "black", color: "white" }}>{children}</body>
    </html>
  );
}
