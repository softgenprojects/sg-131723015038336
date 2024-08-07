import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function Chart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Performance Overview</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[200px] flex items-center justify-center bg-muted">
          Chart Placeholder
        </div>
      </CardContent>
    </Card>
  );
}