import Image from "next/image";
import { ClientLogos } from "../utils/props/data";
import Container from "./container";

export default function ClientLogo() {
	return (
		<Container className={"mb-10"}>
			<div className="flex items-center max-xl:flex-col justify-between gap-8 flex-auto ">
				<div>
					<p className="text-3xl font-bold max-lg:text-center">
						Empresas que confiam na gente!
					</p>
				</div>
				<div className="grid grid-cols-2 lg:grid-cols-4 items-center justify-between gap-8">
					{ClientLogos.map((image) => (
						<Image
							key={image.name}
							src={image.url}
							alt={image.name}
							width={300}
							height={300}
						/>
					))}
				</div>
			</div>
		</Container>
	);
}
