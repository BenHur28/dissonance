import { currentProfile } from "@/lib/current-profile";
import { db } from "@/lib/db";
import { redirect } from "next/navigation";

type ServerSidebarProps = {
	serverId: string;
};

const ServerSideBar = async ({ serverId }: ServerSidebarProps) => {
	const profile = await currentProfile();

	if (!profile) {
		return redirect("/");
	}

	const server = await db.server.findUnique({
		where: {
			id: serverId,
		},
		include: {
			channels: {
				orderBy: {
					createdAt: "asc",
				},
			},
			members: {
				include: {
					profile: true,
				},
				orderBy: {
					role: "asc",
				},
			},
		},
	});

	return <div>ServerSideBar</div>;
};

export default ServerSideBar;
