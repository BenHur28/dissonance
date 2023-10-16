"use client";

import { Channel, ChannelType, MemberRole, Server } from "@prisma/client";

type ServerChannelProps = {
	channel: Channel;
	server: Server;
	role?: MemberRole;
};

const ServerChannel = ({ channel, server, role }: ServerChannelProps) => {
	return <div>ServerChannel</div>;
};

export default ServerChannel;
