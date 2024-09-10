"use client";
import { type DOMAttributes, forwardRef, type HTMLAttributes } from "react";
import { useHandleElement } from "../utils/hooks/functions";

type props = DOMAttributes<HTMLSpanElement> &
	HTMLAttributes<HTMLSpanElement> & {
		title: string;
		className?: string;
		type?: "light" | "dark";
	};

export type eventProps = {
	event: EventTarget & Element;
};
const Subtitle = forwardRef<HTMLSpanElement, props>(
	({ title, className, type = "light", ...rest }, ref) => {
		const handleElement = useHandleElement();

		const bgColorTheme = () => {
			if (type === "light") {
				return "bg-green-500/10";
			}
			if (type === "dark") {
				return "text-white bg-white/50";
			}
		};

		return (
			<span
				className={`p-1 rounded-lg px-4 inline-flex text-green-500 uppercase font-bold tracking-widest ${bgColorTheme()} ${className} `}
				onMouseEnter={(e) =>
					handleElement({ event: e.currentTarget, modalPosition: "up" })
				}
				ref={ref}
				{...rest}
			>
				{title}
			</span>
		);
	},
);
Subtitle.displayName = "Subtitle";

export { Subtitle };
