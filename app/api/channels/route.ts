import { NextResponse } from "next/server";

export async function POST(req: Request) {
	try {
	} catch (error) {
		console.log("CHANNELS_POST", error);
		return new NextResponse("Internal Error", { status: 500 });
	}
}
