import { type HTMLAttributes, useRef } from "react";
import CodeBlock from "./CodeBlock";

import { useHandlePositionOnElement } from "../utils/hooks/functions";

import type { MouseEventProps } from "../utils/props/props";
import { useModalElementStore } from "../utils/hooks/stores";

type props = HTMLAttributes<HTMLDivElement> & {
	codeTitle?: string;
	codeType?: string;
};
type positionProps = { top: number; left: number };
type dimensionProps = {
	width: number;
	height: number;
	marginBottom: number | string;
};

export default function Modal({ codeType = "css", codeTitle, ...rest }: props) {
	const { open, setOpen } = useModalElementStore();
	const { className, cssText, dimension, position } =
		useHandlePositionOnElement();
	const modalRef = useRef<HTMLDivElement>(null);
	const divRef = useRef<HTMLDivElement>(null);

	function handleMouseOut(e: MouseEventProps) {
		if (modalRef && divRef) {
			if (
				!modalRef.current?.contains(e.event.relatedTarget as Node) &&
				!divRef.current?.contains(e.event.relatedTarget as Node)
			) {
				setOpen(false);
			}
		}
	}

	return (
		<div
			className={`absolute inset-0 flex max-md:justify-center group min-w-full pointer-events-none ${open ? "active" : ""}`}
			{...rest}
		>
			<div className="max-w-[-webkit-fill-available]">
				<div
					className={`relative flex max-md:items-center bottom-0 mb-4 z-20 opacity-0 pointer-events-none group-[.active]:opacity-100 group-[.active]:pointer-events-auto transition-opacity max-md:!ml-0  max-md:px-4 ${className}`}
					style={{ marginTop: position.top, marginLeft: position.left }}
					onMouseOut={(e) => handleMouseOut({ event: e })}
					onBlur={(e) => handleMouseOut({ event: e })}
				>
					<CodeBlock
						title={codeTitle}
						ref={modalRef}
						code={cssText}
						language={codeType}
						className={"shadow-lg shadow-black/5 w-max h-max"}
					/>
					<div
						className="bg-green-300/20 rounded-lg -z-10"
						style={dimension}
						ref={divRef}
					/>
				</div>
			</div>
		</div>
	);
}
