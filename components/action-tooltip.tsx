"use client";

import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "@/components/ui/tooltip";

type ActionToolTipProps = {
	label: string;
	children: React.ReactNode;
	side?: "top" | "right" | "bottom" | " left";
	align?: "start" | "center" | "end";
};

export const ActionTooltip = ({
	label,
	children,
	side,
	align,
}: ActionToolTipProps) => {};
