import { currentProfile } from "@/lib/current-profile";
import { db } from "@/lib/db";
import { redirect } from "next/navigation";
import NavAction from "./nav-action";
import { Separator } from "../ui/separator";

const Navsidebar = async () => {
	const profile = await currentProfile();
	if (!profile) {
		return redirect("/");
	}

	const servers = await db.server.findMany({
		where: {
			members: {
				some: {
					profileId: profile.id,
				},
			},
		},
	});

	return (
		<div className="space-y-4 flex flex-col items-center h-full text-primary w-full dark:bg-[#1e1f22] py-3">
			<NavAction />
			<Separator className="h-[2px] bg-zine-300 dark:bg-zinc-700 rounded-md w-10 mx-auto" />
		</div>
	);
};

export default Navsidebar;
