"use client";

import { Member } from "@prisma/client";

type ChatMessagesProps = {
	name: string;
	member: Member;
	chatId: string;
	apiUrl: string;
	socketUrl: string;
	socketQuery: Record<string, string>;
	paramKey: "channelId" | "conversationId";
	paramValue: string;
	type: "channel" | "conversation";
};

const ChatMessages = ({
	name,
	member,
	chatId,
	apiUrl,
	socketUrl,
	socketQuery,
	paramKey,
	paramValue,
	type,
}: ChatMessagesProps) => {
	return <div></div>;
};

export default ChatMessages;