import { Button } from "@/components/ui/button";

export function NavMenu() {
  return (
    <nav className="flex flex-col space-y-4 py-4">
      <Button variant="ghost" className="justify-start">Dashboard</Button>
      <Button variant="ghost" className="justify-start">Users</Button>
      <Button variant="ghost" className="justify-start">Projects</Button>
      <Button variant="ghost" className="justify-start">Settings</Button>
    </nav>
  );
}