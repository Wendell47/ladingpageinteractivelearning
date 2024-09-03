import Image from "next/image"
import Button from "./button"
import Section from "./Section"
import { Subtitle } from "./subtitle"

export default function Hero(){
    return(
        <div className="lg:h-screen bg-hero-pattern bg-cover  grid place-items-center pt-[83px]">
                <Section className="!py-8 max-lg:flex-col-reverse">
        
                   <div className="[&>p]:text-xl max-lg:flex max-lg:flex-col max-lg:items-center max-lg:*:text-center"> 
                    <Subtitle title="#🌱Sustentabilidade" />
                    <h1 className="text-h1Clamp leading-none font-bold my-4">Cultivando um <span className="text-green-500 font-bold">Futuro Sustentável</span></h1>
                    <p>Nossa missão é cultivar uma mentalidade sustentável, promovendo ações concretas que visam garantir um futuro melhor para todos. Junte-se a nós nessa jornada e faça parte da mudança!</p>
                        <div className="flex max-lg:flex-col gap-4  mt-6 w-full">
                        <Button title="Entre em contato" type="primary"/>
                        <Button title="Saiba Mais"/>
                        </div>
                </div>
                <div className="flex justify-center">
                    <Image
                    src={"/img-hero.webp"}
                    width={400}
                    height={400}
                    quality={100}
                    className="w-full max-xl:w-[70%]"
                    alt="Desenho grafico de uma pessoa regando plantas"
                    />
                </div>
                
                </Section>
            </div>
        
    )
}