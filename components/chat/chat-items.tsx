"use client";

import { Member, Profile } from "@prisma/client";
import UserAvatar from "../user-avatar";

type ChatItemProps = {
	id: string;
	content: string;
	member: Member & {
		profile: Profile;
	};
	timestamp: string;
	fileUrl: string | null;
	deleted: boolean;
	currentMember: Member;
	isUpdated: boolean;
	socketUrl: string;
	socketQuery: Record<string, string>;
};

const ChatItem = ({
	id,
	content,
	member,
	timestamp,
	fileUrl,
	deleted,
	currentMember,
	isUpdated,
	socketUrl,
	socketQuery,
}: ChatItemProps) => {
	return (
		<div className="relative group flex items-center hover:bg-black/5 p-4 transition w-full">
			<div className="group flex gap-x-2 items-start w-full">
				<div className="cursor-pointer hover:drop-shadow-md transition">
					<UserAvatar src={member.profile.imageUrl} />
				</div>
			</div>
		</div>
	);
};

export default ChatItem;
