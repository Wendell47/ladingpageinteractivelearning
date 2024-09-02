"use client"

import { useEffect, useState } from "react"
import Logo from "../assets/logo"
import Container from "./container"
import Link from "next/link"
import Button from "./button"

export default function Header(){
    const [scrolled,setScrolled]=useState(false)

    const Menu = [
       {
         name:"Início",
         url:"/",
       },
       {
         name:"Docs",
         url:"/docs",
       },
       {
         name:"Serviços",
         url:"#",
       },
      
    
    ]

    useEffect(() => {
        const handleScroll = () => {
          if (window.scrollY > 100) {
            setScrolled(true);
          } else {
            setScrolled(false);
          }
        }
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, [])

 
    return(
        <header className={`z-10 fixed top-0 inset-x-0 py-4 border-b border-black/5  transition-all ${scrolled && "backdrop-blur-2xl bg-white/80"}`}>
          <Container>
            <div className="flex justify-between items-center">
            <div>
                <Logo/>
            </div>
            <nav>
                <ul className="flex gap-6 [&>li]:text-lg">
                    {
                        Menu.map((item,index) => <li key={index}><Link className="font-bold tracking-widest " href={item.url}>{item.name}</Link></li>)
                    }
                </ul>
            </nav>
            <Button title={"Contato"}/>
            </div>
          </Container>
        </header>
    )
} 