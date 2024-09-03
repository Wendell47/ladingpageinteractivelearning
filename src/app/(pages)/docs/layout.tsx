"use client"
import Container from "@/app/components/container";
import { childrenProp } from "@/app/utils/props/props";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import colors from "tailwindcss/colors";

export default function Layout({children}:childrenProp){

    const[open,setOpen]=useState(false)

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
            <div className="flex gap-3 max-lg:flex-col">
            <div className="flex-1 flex-grow-[2]">
                <div className={`fixed top-0 mt-[73px] lg:mt-[11.5rem] max-lg:inset-x-0 px-6 max-lg:border-b border-gray-100  bg-white group ${open ?'open bottom-0': ''}`}>
                <div className="lg:hidden flex gap-4 items-center cursor-pointer py-2 " onClick={()=>setOpen(!open)}><ChevronDown size={16} color={colors.green[500]} className="group-[.open]:rotate-180"/> Menu</div>

                <ul className="h-full hidden group-[.open]:block lg:block">
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
            </div>
                {children}
            </div>
        </Container>
    )
}