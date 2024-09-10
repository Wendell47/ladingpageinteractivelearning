import type React from "react";
import type { ReactNode } from "react";

export type props = {
	title: string;
};

export type childrenProp = {
	children: ReactNode;
};

export type stylesProps = {
	stylesName: "Subtitle" | "Title" | "";
};

export type MouseEventProps = {
	event: React.MouseEvent | React.FocusEvent;
};
