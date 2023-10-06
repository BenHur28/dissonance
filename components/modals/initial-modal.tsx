"use client";

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
} from "@/components/ui/dialog";

const InitialModal = () => {
	return (
		<Dialog open={true}>
			<DialogContent className="bg-white text-black p-0 overflow-hidden">
				<DialogHeader className="pt-8 px-6">
					<DialogTitle className="text-center text-2xl font-bold">
						Customize your server
					</DialogTitle>
					<DialogDescription className="text-center text-zinc-500">
						Give your server a personality with a name and an image. You can
						always change it later.
					</DialogDescription>
				</DialogHeader>
			</DialogContent>
		</Dialog>
	);
};

export default InitialModal;
