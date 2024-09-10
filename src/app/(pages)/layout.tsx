"use client";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";
import Container from "../components/container";
import { ChevronRight } from "lucide-react";

type props = {
	children: ReactNode;
};
export default function Layout({ children }: props) {
	const pathName = usePathname().replace("/", "");

	return (
		<div className="mt-[7.5rem]">
			<Container className="py-6">
				<div className="flex gap-2 items-center">
					Início <ChevronRight size={14} />
					<span>{pathName}</span>
				</div>
			</Container>
			{children}
		</div>
	);
}
