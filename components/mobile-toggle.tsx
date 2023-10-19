import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "./ui/button";
import NavSidebar from "./navigation/nav-sidebar";
import ServerSideBar from "./server/server-sidebar";

const MobileToggle = ({ serverId }: { serverId: string }) => {
	return (
		<div>
			<Sheet>
				<SheetTrigger asChild>
					<Button variant="ghost" size="icon" className="md:hidden">
						<Menu />
					</Button>
				</SheetTrigger>
				<SheetContent side="left" className="flex p-0 gap-0">
					<div className="w-[72px]">
						<NavSidebar />
					</div>
					<ServerSideBar serverId={serverId} />
				</SheetContent>
			</Sheet>
		</div>
	);
};

export default MobileToggle;
