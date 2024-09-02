import Image from "next/image"
import Container from "./container"
import img from "../assets/heroContentImg.png"
import Subtitle from "./subtitle"
import Button from "./button"

export default function Hero(){
    return(
        <div className="h-screen bg-hero-pattern bg-cover py-4 grid place-items-center pt-[4.5rem]">
                <Container>
                <div className='flex [&>div]:flex-1 flex-wrap items-center'>
                   <div className="[&>p]:text-xl "> 
                    <Subtitle title="#🌱Sustentabilidade"/>
                    <h1 className="text-h1Clamp leading-none font-bold my-4">Cultivando um <span className="text-green-500 font-bold">Futuro Sustentável</span></h1>
                    <p>Nossa missão é cultivar uma mentalidade sustentável, promovendo ações concretas que visam garantir um futuro melhor para todos. Junte-se a nós nessa jornada e faça parte da mudança!</p>
                        <div className="flex gap-4 flex-wrap mt-6">
                        <Button title="Entre em contato" type="primary"/>
                        <Button title="Saiba Mais"/>
                        </div>
                </div>
                <div>
                    <Image
                    src={img}
                    width={400}
                    height={400}
                    quality={100}
                    className="w-full"
                    alt="Desenho grafico de uma pessoa regando plantas"
                    />
                </div>
                </div>
                </Container>
            </div>
        
    )
}