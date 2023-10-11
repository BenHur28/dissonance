import { NextResponse } from "next/server";

export async function PATCH(
	req: Request,
	{ params }: { params: { serverId: string } }
) {
	try {
	} catch (error) {
		console.log("SERVER_ID_PATCH", error);
		return new NextResponse("Internal Error", { status: 500 });
	}
}
