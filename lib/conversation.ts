import { db } from "@/lib/db";

export const getOrCreateConversation = async (
	memberOneId: string,
	memberTwoId: string
) => {
	let conversation =
		(await findConversation(memberOneId, memberTwoId)) ||
		(await findConversation(memberTwoId, memberOneId));
};

const findConversation = async (memberOneId: string, memberTwoId: string) => {
	try {
		return await db.conversation.findFirst({
			where: {
				AND: [{ memberOneId: memberOneId }, { memberTwoId: memberTwoId }],
			},
			include: {
				memberOne: {
					include: {
						profile: true,
					},
				},
				memberTwo: {
					include: {
						profile: true,
					},
				},
			},
		});
	} catch (error) {
		console.log(error);
	}
};

const createNewConversation = async (
	memberOneId: string,
	memberTwoId: string
) => {
	try {
		return await db.conversation.create({
			data: {
				memberOneId: memberOneId,
				memberTwoId: memberTwoId,
			},
			include: {
				memberOne: {
					include: {
						profile: true,
					},
				},
				memberTwo: {
					include: {
						profile: true,
					},
				},
			},
		});
	} catch (error) {
		console.log(error);
	}
};
