import { DashboardLayout } from "@/components/DashboardLayout";
import { SummaryCard } from "@/components/SummaryCard";
import { Chart } from "@/components/Chart";
import { RecentActivity } from "@/components/RecentActivity";
import { Users, DollarSign, Briefcase } from "lucide-react";

export default function Home() {
  return (
    <DashboardLayout>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <SummaryCard title="Total Users" value="1,234" icon={Users} />
        <SummaryCard title="Revenue" value="$12,345" icon={DollarSign} />
        <SummaryCard title="Active Projects" value="42" icon={Briefcase} />
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