import Container from "@/app/components/container";
import { childrenProp } from "@/app/utils/props/props";
import Link from "next/link";

export default function Layout({children}:childrenProp){
    const Topics = [
        {
            title:"Primeiras Etapas",
            url:"#",
            subTopics:[
                {
                    title:"Introdução",
                    url:"#"
                },
                {
                    title:"Tags",
                    url:"#"
                },
                {
                    title:"Componentes",
                    url:"#"
                },
                {
                    title:"Css",
                    url:"#"
                }
            ]
        },
        
    ]

    return(
        <Container>
            <div className="flex gap-3 max-xl:flex-col">
            <div className="flex-1 flex-grow-[2]">
                <ul className="fixed top-0 mt-[11.5rem]">
                    {Topics.map((topic,index)=>(
                        <li key={index} ><Link className="font-bold py-2 block first:pt-0" href={topic.url}>{topic.title}</Link>
                            <ul className={`flex flex-col *:transition-all`}>
                                {topic.subTopics.map((subTopic,index)=>(
                                    <li key={index} className=""><Link href={subTopic.url} className="py-2 block pl-2 text-gray-500 hover:text-gray-900 border-l border-gray-100 hover:border-l-4 hover:border-green-500">{subTopic.title}</Link></li>
                                ))}
                            </ul>
                        </li>
                    ))}
                </ul>
            </div>
                {children}
            </div>
        </Container>
    )
}