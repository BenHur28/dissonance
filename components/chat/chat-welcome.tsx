type ChatWelcomeProps = {
	name: string;
	type: "channel" | "conversation";
};

const ChatWelcome = ({ name, type }: ChatWelcomeProps) => {
	return <div className="">ChatWelcome</div>;
};

export default ChatWelcome;
