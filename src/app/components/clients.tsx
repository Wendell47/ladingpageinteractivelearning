import Image from "next/image";
import { ClientLogos } from "../utils/props/data";
import Container from "./container";


export default function ClientLogo(){
    return(
       <Container>
         <div className="flex items-center justify-between gap-8 flex-auto mt-10">
            <div><p className="text-3xl font-bold">Empresas que confiam na gente!</p></div>
            <div className="flex items-center justify-between gap-8">
                {ClientLogos.map((image)=>(
                    <Image key={image.name} src={image.url} alt={image.name} width={300} height={300}/>
                ))}
            </div>
        </div>
       </Container>
    )
}