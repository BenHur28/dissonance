"use client";

import * as z from "zod";

type ChatInputProps = {
	apiUrl: string;
	query: Record<string, any>;
	name: string;
	type: "conversation" | "channel";
};

const formSchema = z.object({
	content: z.string().min(1),
});

const ChatInput = ({ apiUrl, query, name, type }: ChatInputProps) => {
	return <div>ChatInput</div>;
};

export default ChatInput;
