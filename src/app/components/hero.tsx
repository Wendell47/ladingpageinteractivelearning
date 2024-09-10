import Image from "next/image"
import Button from "./button"
import Section from "./Section"
import { Subtitle } from "./subtitle"
import { useHandleElement } from "../utils/hooks/functions"

export default function Hero(){
    const handleElement = useHandleElement()

    return(
        <div className="lg:h-screen bg-hero-pattern bg-cover  grid place-items-center pt-[83px]">
                <Section className="!py-8 max-lg:flex-col-reverse">
        
                   <div className="[&>p]:text-xl max-lg:flex max-lg:flex-col max-lg:items-center max-lg:*:text-center"> 
                    <Subtitle title="#🌱Sustentabilidade" id="heroSubtitle" onMouseEnter={e => handleElement({event:e.currentTarget,modalPosition:'bottom'})}/>
                    <h1 id="heroTitle" className="text-h1Clamp leading-none font-bold my-4" onMouseEnter={e => handleElement({event:e.currentTarget,modalPosition:'up'})} >Cultivando um <span className="text-green-500 font-bold" >Futuro Sustentável</span></h1>
                    <p>Nossa missão é cultivar uma mentalidade sustentável, promovendo ações concretas que visam garantir um futuro melhor para todos. Junte-se a nós nessa jornada e faça parte da mudança!</p>
                        <div className="flex max-lg:flex-col gap-4  mt-6 w-full">
                        <Button id="heroPrimaryButton" title="Entre em contato" typeOf="primary" onMouseEnter={e => handleElement({event:e.currentTarget})}/>
                        <Button id="heroSecondaryButton" title="Saiba Mais" onMouseEnter={e => handleElement({event:e.currentTarget})}/>
                        </div>
                </div>
                <div className="flex justify-center" >
                    <Image
                    id="HeroImage"
                    src={"/img-hero.webp"}
                    width={400}
                    height={400}
                    quality={100}
                    className="w-full max-2xl:w-[70%]"
                    alt="Desenho grafico de uma pessoa regando plantas"
                    onMouseEnter={e => handleElement({event:e.currentTarget,modalPosition:"right"})}
                    />
                </div>
                
                </Section>
            </div>
        
    )
}