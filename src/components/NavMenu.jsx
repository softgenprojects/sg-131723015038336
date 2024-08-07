import { Button } from "@/components/ui/button";
import { Home, Users, Briefcase, Settings } from "lucide-react";

export function NavMenu() {
  return (
    <nav className="flex flex-col space-y-4 p-4">
      <Button variant="ghost" className="justify-start">
        <Home className="mr-2 h-4 w-4" />
        Dashboard
      </Button>
      <Button variant="ghost" className="justify-start">
        <Users className="mr-2 h-4 w-4" />
        Users
      </Button>
      <Button variant="ghost" className="justify-start">
        <Briefcase className="mr-2 h-4 w-4" />
        Projects
      </Button>
      <Button variant="ghost" className="justify-start">
        <Settings className="mr-2 h-4 w-4" />
        Settings
      </Button>
    </nav>
  );
}