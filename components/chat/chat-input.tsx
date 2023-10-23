"use client";

type ChatInputProps = {
	apiUrl: string;
	query: Record<string, any>;
	name: string;
	type: "conversation" | "channel";
};

const ChatInput = () => {
	return <div>ChatInput</div>;
};

export default ChatInput;
