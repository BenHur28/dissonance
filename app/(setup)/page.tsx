import { initialProfile } from "@/lib/initial-profile";

const SetupPage = async () => {
	const profile = await initialProfile();
	return <div>Create A Server</div>;
};

export default SetupPage;
