type MemberIdPageProps = {
	params: {
		memberId: string;
		serverId: string;
	};
};

const MemberIdPage = ({ params }: MemberIdPageProps) => {
	return <div>Specific Member Page</div>;
};

export default MemberIdPage;
