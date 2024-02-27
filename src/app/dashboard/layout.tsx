import React, { PropsWithChildren } from "react";

export default function DashboardLayout({
  documents,
  inspector,
  sideboard,
  children,
}: PropsWithChildren<{
  inspector: React.ReactNode;
  documents: React.ReactNode;
  sideboard: React.ReactNode;
}>) {
  return (
    <div style={{ display: "flex", flexDirection: "row", gap: 32 }}>
      {children}
      {sideboard}
      {documents}
      {inspector}
    </div>
  );
}
