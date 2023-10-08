"use client";

import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import { ActionTooltip } from "../action-tooltip";

type NavItemProps = {
	id: string;
	imageUrl: string;
	name: string;
};

const Navitem = ({ id, imageUrl, name }: NavItemProps) => {
	return <div>Navitem</div>;
};

export default Navitem;
