"use client";

import { cn } from "@/lib/utils";
import { Channel, ChannelType, MemberRole, Server } from "@prisma/client";
import { Edit, Hash, Lock, Mic, Trash, Video } from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import { ActionTooltip } from "../action-tooltip";
import { useModal } from "@/hooks/use-modal-store";

type ServerChannelProps = {
	channel: Channel;
	server: Server;
	role?: MemberRole;
};

const iconMap = {
	[ChannelType.TEXT]: Hash,
	[ChannelType.AUDIO]: Mic,
	[ChannelType.VIDEO]: Video,
};

const ServerChannel = ({ channel, server, role }: ServerChannelProps) => {
	const { onOpen } = useModal();
	const params = useParams();
	const router = useRouter();

	const Icon = iconMap[channel.type];

	return (
		<button
			onClick={() => {}}
			className={cn(
				"group px-2 py-2 rounded-md flex items-center gap-x-2 mb-1 w-full hover:bg-zinc-700/10 dark:hover:bg-zinc-700/50 transition",
				params?.channelId === channel.id && "bg-zinc-700/20 dark:bg-zinc-700"
			)}
		>
			<Icon className="flex-shrink-0 w-5 h-5 text-zinc-500 dark:text-zinc-400" />
			<p
				className={cn(
					"line-clamp-1 font-semibold text-sm text-zinc-500 group-hover:text-zinc-600 dark:text-zinc-600 dark:group-hover:text-zinc-300 transition",
					params?.channelId === channel.id &&
						"text-primary dark:text-zinc-200 dark:group-hover:text-white"
				)}
			>
				{channel.name}
			</p>
			{channel.name !== "general" && role !== MemberRole.GUEST && (
				<div className="ml-auto flex items-center gap-x-2">
					<ActionTooltip label="Edit">
						<Edit
							onClick={() => onOpen("editChannel", { server, channel })}
							className="h-4 w-4 hidden group-hover:block text-zinc-500 hover:text-zinc-600 dark:text-zinc-400 dark:hover:text-zinc-300 transition"
						/>
					</ActionTooltip>
					<ActionTooltip label="Delete">
						<Trash
							onClick={() => onOpen("deleteChannel", { server, channel })}
							className="h-4 w-4 hidden group-hover:block text-zinc-500 hover:text-zinc-600 dark:text-zinc-400 dark:hover:text-zinc-300 transition"
						/>
					</ActionTooltip>
				</div>
			)}
			{channel.name === "general" && (
				<Lock className="ml-auto h-4 w-4 text-zinc-500 dark:text-zinc-400" />
			)}
		</button>
	);
};

export default ServerChannel;
