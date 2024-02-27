import type { JSX } from "react";
import type { DashboardParams } from "@/app/dashboard/types";

export default function SideboardPage({
  params,
}: {
  params: DashboardParams;
}): JSX.Element {
  return <div>[Team ({params.teamId})]</div>;
}
