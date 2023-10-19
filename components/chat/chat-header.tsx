type ChatHeaderProps = {
	serverId: string;
	name: string;
	type: "channel" | "conversation";
	imageUrl?: string;
};

const ChatHeader = ({ serverId, name, type, imageUrl }: ChatHeaderProps) => {
	return <div></div>;
};

export default ChatHeader;
