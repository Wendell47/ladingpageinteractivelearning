import type { ButtonHTMLAttributes } from "react";
import type { props } from "../utils/props/props";

type buttonProps = props &
	ButtonHTMLAttributes<HTMLButtonElement> & {
		typeOf?: "primary";
		className?: string;
	};
export default function Button({
	title,
	typeOf,
	className,
	...rest
}: buttonProps) {
	return (
		<button
			className={`p-3 px-6 rounded-lg uppercase tracking-wider font-bold   ${typeOf === "primary" ? "bg-green-500 text-white  shadow-lg shadow-green-200" : "border border-green-500 text-green-500"} ${className}`}
			{...rest}
		>
			{title}
		</button>
	);
}
