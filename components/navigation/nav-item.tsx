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
	const params = useParams();
	const router = useRouter();

	return (
		<ActionTooltip side="right" align="center" label={name}>
			<button onClick={() => {}} className="group relative flex items-center">
				<div
					className={cn(
						"absolute left-0 bg-priamry rounded-r-full transition-all w-[4px]",
						params?.serverId != id && "group-hover:h-[20px]",
						params?.serverId === id ? "h-[36px]" : "h-[8px]"
					)}
				>
					server
				</div>
			</button>
		</ActionTooltip>
	);
};

export default Navitem;
