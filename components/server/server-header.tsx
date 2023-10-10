"use client";

import { Server } from "@prisma/client";

type ServerHeaderProps = {
	server: Server;
};

const ServerHeader = () => {
	return <div>ServerHeader</div>;
};

export default ServerHeader;
