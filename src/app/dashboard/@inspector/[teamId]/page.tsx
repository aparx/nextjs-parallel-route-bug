import type { DashboardParams } from "@/app/dashboard/types";

export default function InspectorPage({ params }: { params: DashboardParams }) {
  return <div>[Inspecting {params.teamId}]</div>;
}
