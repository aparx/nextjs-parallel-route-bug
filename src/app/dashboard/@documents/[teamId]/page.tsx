import type { JSX } from "react";
import type { DashboardParams } from "@/app/dashboard/types";

export default function TeamPage({
  params,
}: {
  params: DashboardParams;
}): JSX.Element {
  return <div>[{params.teamId}s documents]</div>;
}
