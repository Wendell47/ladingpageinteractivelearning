"use client"
import Image from "next/image";
import Hero from "./components/hero";
import Section from "./components/Section";
import {Subtitle} from "./components/subtitle";
import Title from "./components/Title";
import ClientLogo from "./components/clients";
import Services from "./components/Services";
import { BadgeCheck } from "lucide-react";
import colors from "tailwindcss/colors";
import { useRef, useState } from "react";
import Modal from "./components/modal";
import { appliedStylesContent } from "./utils/cssLayout";
import { stylesProps } from "./utils/props/props";
import Form from "./components/form";

export default function Home() {
  const [cssText, setCssText] = useState('')
  const [open, setOpen] = useState(false)
  const [elementId, setElementId] = useState<EventTarget & Element>()
  const elementRef = useRef<HTMLElement>(null)



  const iniciativasAgricolas = [
    "Apoio Técnico e Capacitação",
    "Certificação Participativa",
    "Logística de Comercialização",
    "Fortalecimento da Agricultura Familiar"
  ]
  
  type props = {
    event:React.MouseEvent
    
  }


  const handleMouseEnter = ({event}:props) => {
    setElementId(event.currentTarget)

   
    setOpen(true)
  };

  return (
    <main className="text-lg" >
      {elementId && <Modal codeTitle="styles.css" open={open} elementId={elementId} onMouseLeave={()=>setOpen(false)}/>}
      <Hero/>
      <Section>
        <div><Image src={"/img2.webp"} width={400} height={400}  className="w-full" quality={100} alt="imagem 1"/></div>
        <div>
          <Subtitle id="subtitle1" ref={elementRef} title="🎯Nosso Proposito" type="light" onMouseEnter={(e)=>handleMouseEnter({event:e})} />
          <Title>Promover a Agroecologia e <span>fortalecer a Agricultura Familiar.</span></Title>
          <p>O propósito da Ecovida é promover a agroecologia e fortalecer a agricultura familiar. Ela conecta grupos e organizações que contestam o modelo de produção agrícola convencional, trabalhando em prol de práticas sustentáveis.</p>
          <p>Através da certificação participativa, apoio técnico e desenvolvimento de logística de comercialização, a Rede Ecovida possibilita que pequenos produtores ofereçam produtos orgânicos no mercado, democratizando o acesso a esses alimentos.</p>
        </div>
        
      </Section>

      <ClientLogo />

      <div className="bg-neutral-900">
      <Section className="flex-col items-center">

        <div className="flex flex-col items-center">
          <Subtitle id="subtitle2" title={"🚀O que nós fazemos!"} type="dark"  ref={elementRef} onMouseEnter={(e)=>handleMouseEnter({event:e})}/>
        <Title className="text-white max-w-2xl text-center">Em Nossa Rede de Apoio Ofereçemos os Seguintes Serviços</Title></div>
          <Services/>
      </Section>  
      </div>

      <Section className="items-center max-lg:flex-col-reverse">
      <div>
          <Subtitle id="subtitle3" title="😁 Nosso Diferencial" onMouseEnter={(e)=>handleMouseEnter({event:e})}/>
          <Title >Venha Fazer Parte da  <span>Mudança com a Gente.</span></Title>
          <p>No nosso time, você pode contar com nosso apoio em cada passo do caminho. Nossos diferenciais incluem:</p>
          <ul>
            {iniciativasAgricolas.map(item => <li key={item} className="flex gap-3 my-4 items-center"> <BadgeCheck size={24} color={colors.green[500]}/> {item}</li>)}
          </ul>
        </div>
        <div><Image src={"/img1.webp"} width={700} height={700} className="w-full" quality={100} alt="imagem 1"/></div>
      </Section>

      <div>
        <div className="bg-[url('/bg-2.webp')] bg-black/40 bg-blend-multiply bg-cover bg-center">
          <Section className="flex-col items-center">
          <Subtitle id="subtitle4" onMouseEnter={(e)=>handleMouseEnter({event:e})} title="🪴 Seja Ecologico" type="dark"/>
          <Title className="text-white" >Venha Fazer Parte da Mudança com a Gente.</Title>
        </Section>
        </div>
      </div>

      <div className="bg-gray-50">
      <Section className="flex-col items-center">

        <div className="flex flex-col items-center">
          <Subtitle id="subtitle5"title={"🚀Nós respondemos em até 24h"} type="light"  ref={elementRef} onMouseEnter={(e)=>handleMouseEnter({event:e})}/>
        <Title className="max-w-2xl text-center">Contato</Title></div>
        <p>Preencha os dados abaixo e entraremos em contato o mais breve possivel!</p>
          <Form/>
      </Section>  
      </div>
    </main>
  );
}
