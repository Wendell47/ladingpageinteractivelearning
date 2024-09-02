import Image from "next/image";
import Hero from "./components/hero";
import Section from "./components/Section";

import img1 from "./assets/img1.png"
import Subtitle from "./components/subtitle";
import Title from "./components/Title";
import ClientLogo from "./components/clients";
import Services from "./components/Services";
import { BadgeCheck } from "lucide-react";
import colors from "tailwindcss/colors";

export default function Home() {

  const iniciativasAgricolas = [
    "Apoio Técnico e Capacitação",
    "Certificação Participativa",
    "Logística de Comercialização",
    "Fortalecimento da Agricultura Familiar"
  ];
  
  return (
    <main className="text-lg">
      <Hero/>
      <Section>
        <div><Image src={img1} width={400} height={400}  className="w-full" quality={100} alt="imagem 1"/></div>
        <div>
          <Subtitle title="🎯 Nosso Proposito"/>
          <Title >Promover a Agroecologia e <span>fortalecer a Agricultura Familiar.</span></Title>
          <p>O propósito da Ecovida é promover a agroecologia e fortalecer a agricultura familiar. Ela conecta grupos e organizações que contestam o modelo de produção agrícola convencional, trabalhando em prol de práticas sustentáveis.</p>
          <p>Através da certificação participativa, apoio técnico e desenvolvimento de logística de comercialização, a Rede Ecovida possibilita que pequenos produtores ofereçam produtos orgânicos no mercado, democratizando o acesso a esses alimentos.</p>
        </div>
        <ClientLogo />
      </Section>

      

      <div className="bg-neutral-900">
      <Section className="flex-col items-center">

        <div className="flex flex-col items-center"><Subtitle title={"🚀O que nós fazemos!"}/>
        <Title className="text-white max-w-2xl text-center">Em Nossa Rede de Apoio Ofereçemos os Seguintes Serviços</Title></div>
          <Services/>
      </Section>  
      </div>
      <Section className="items-center">
      <div>
          <Subtitle title="😁 Nosso Diferencial"/>
          <Title >Venha Fazer Parte da  <span>Mudança com a Gente.</span></Title>
          <p>No nosso time, você pode contar com nosso apoio em cada passo do caminho. Nossos diferenciais incluem:</p>
          <ul>
            {iniciativasAgricolas.map(item => <li key={item} className="flex gap-3 my-4 items-center"> <BadgeCheck size={24} color={colors.green[500]}/> {item}</li>)}
          </ul>
        </div>
        <div><Image src={"/img2.png"} width={400} height={400}  className="w-full" quality={100} alt="imagem 1"/></div>
      </Section>
    </main>
  );
}
