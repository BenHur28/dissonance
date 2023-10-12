"use client";

import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
} from "@/components/ui/dialog";

import { useModal } from "@/hooks/use-modal-store";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Check, Copy, RefreshCw } from "lucide-react";
import { useState } from "react";
import axios from "axios";

const MembersModal = () => {
	const { onOpen, isOpen, onClose, type, data } = useModal();

	const isModalOpen = isOpen && type === "members";
	const { server } = data;

	return (
		<Dialog open={isModalOpen} onOpenChange={onClose}>
			<DialogContent className="bg-white text-black p-0 overflow-hidden">
				<DialogHeader className="pt-8 px-6">
					<DialogTitle className="text-center text-2xl font-bold">
						Invite Friends
					</DialogTitle>
				</DialogHeader>
				<div className="p-6">Hello Members List</div>
			</DialogContent>
		</Dialog>
	);
};

export default MembersModal;
