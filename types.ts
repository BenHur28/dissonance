import { Profile, Member, Server } from "@prisma/client";

export type ServerWithMembersWithPorfiles = Server & {
	members: (Member & { profile: Profile })[];
};
