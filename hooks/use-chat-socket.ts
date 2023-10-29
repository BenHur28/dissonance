import { useEffect } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { Member, Message, Profile } from "@prisma/client";

import { useSocket } from "@/components/providers/socket.provider";

type ChatSocketProps = {
	addKey: string;
	updateKey: string;
	queryKey: string;
};
