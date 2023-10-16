"use client";

import { ServerWithMembersWithProfiles } from "@/types";
import { ChannelType, MemberRole } from "@prisma/client";

type ServerSectionProps = {
	label: string;
	role?: MemberRole;
	sectionType: "channels" | "members";
	channelType?: ChannelType;
	server?: ServerWithMembersWithProfiles;
};

const ServerSection = ({
	label,
	role,
	sectionType,
	channelType,
	server,
}: ServerSectionProps) => {
	return <div>ServerSection</div>;
};

export default ServerSection;
