type ChatScrollProps = {
	chatRef: React.RefObject<HTMLDivElement>;
	bottomRef: React.RefObject<HTMLDivElement>;
	shouldLoadMore: boolean;
	loadMore: () => void;
	count: number;
};

export const useChatScroll = ({
	chatRef,
	bottomRef,
	shouldLoadMore,
	loadMore,
	count,
}: ChatScrollProps) => {};
