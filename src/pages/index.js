import { DashboardLayout } from "@/components/DashboardLayout";
import { SummaryCard } from "@/components/SummaryCard";
import { Chart } from "@/components/Chart";
import { RecentActivity } from "@/components/RecentActivity";

export default function Home() {
  return (
    <DashboardLayout>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <SummaryCard title="Total Users" value="1,234" />
        <SummaryCard title="Revenue" value="$12,345" />
        <SummaryCard title="Active Projects" value="42" />
      </div>
      <div className="mt-8">
        <Chart />
      </div>
      <div className="mt-8">
        <RecentActivity />
      </div>
    </DashboardLayout>
  );
}