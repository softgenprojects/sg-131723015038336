import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function RecentActivity() {
  const activities = [
    { type: 'login', user: 'John Doe', color: 'bg-blue-500' },
    { type: 'project', name: 'Website Redesign', color: 'bg-green-500' },
    { type: 'task', name: 'Update Documentation', color: 'bg-yellow-500' },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-4">
          {activities.map((activity, index) => (
            <li key={index} className="flex items-center">
              <span className={`w-2 h-2 ${activity.color} rounded-full mr-2`}></span>
              <span>
                {activity.type === 'login' && `User ${activity.user} logged in`}
                {activity.type === 'project' && `New project "${activity.name}" created`}
                {activity.type === 'task' && `Task "${activity.name}" completed`}
              </span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}