"use client";
import type { eventProps } from "@/app/components/subtitle";
import { type positionOnElement, useModalElementStore } from "./stores";
import { appliedStylesContent } from "../cssLayout";
import { useEffect, useRef, useState } from "react";
type props = eventProps & {
	modalPosition?: positionOnElement;
};

type positionProps = { top: number | undefined; left: number | undefined };
type dimensionProps = {
	width: number | undefined;
	height: number | undefined;
	margin: number | string;
};

const useHandleElement = () => {
	const { setElement, setOpen, setPositionOnElement } = useModalElementStore();
	const handleElement = ({ event, modalPosition = "up" }: props) => {
		setPositionOnElement(modalPosition);
		setElement(event);
		setOpen(true);
	};
	return handleElement;
};

const useHandlePositionOnElement = () => {
	const { element, modalPositionOnElement } = useModalElementStore();
	const [position, setPosition] = useState<positionProps>({ left: 0, top: 0 });
	const [dimension, setDimension] = useState<dimensionProps>({
		width: 0,
		height: 0,
		margin: 0,
	});
	const [className, setClassName] = useState("");
	const [cssText, setCssText] = useState("");

	const Element = useRef<HTMLElement | null>(null);

	useEffect(() => {
		let elementBlockMargin: string | number = 0;
		let cssString = "";
		function switchPosition(position: positionOnElement) {
			switch (position) {
				case "up":
					elementBlockMargin = `0 0 -${Element.current?.offsetHeight}px 0`;
					setClassName("flex-col -translate-y-full");
					break;
				case "bottom":
					setClassName("flex-col-reverse");
					break;
				case "left":
					elementBlockMargin = `0 0 0 -${Element.current?.offsetWidth}px`;
					setClassName("translate-x-full");
					break;
				case "right":
					elementBlockMargin = `0 -${Element.current?.offsetWidth}px 0 0`;
					setClassName("-translate-x-full");
					break;
			}
		}

		function handleElement() {
			if (element?.id) {
				Element.current = document.getElementById(element.id);

				const styles = window.getComputedStyle(element);
				const appliedStyles = appliedStylesContent;

				for (let index = 0; index < appliedStyles?.Subtitle.length; index++) {
					const element = appliedStyles?.Subtitle[index];
					cssString += `${element}: ${styles.getPropertyValue(element)};\n`;
				}
				switchPosition(modalPositionOnElement);

				setPosition({
					left: Element.current?.offsetLeft,
					top: Element.current?.offsetTop,
				});
				setDimension({
					width: Element.current?.offsetWidth,
					height: Element.current?.offsetHeight,
					margin: elementBlockMargin,
				});
				setCssText(cssString);
			}
		}

		handleElement();
	}, [element, modalPositionOnElement]);

	return { position, dimension, className, cssText };
};
export { useHandleElement, useHandlePositionOnElement };
