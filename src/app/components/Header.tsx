"use client"

import { useEffect, useState } from "react"
import Logo from "../assets/logo"
import Container from "./container"
import Link from "next/link"
import Button from "./button"
import { LucideMenu } from "lucide-react"

export default function Header(){
    const [scrolled,setScrolled]=useState(false)
    const [open,setOpen]= useState(false)
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
        <header className={`z-10 fixed top-0 inset-x-0 py-4 border-b border-black/5  transition-all ${scrolled && "backdrop-blur-2xl bg-white/90"}`}>
          <Container>
            <div className="flex justify-between items-center">
            <div>
                <Logo/>
            </div>
            <nav className="group">
                <LucideMenu size={24} onClick={() =>setOpen(!open)}/>
               <div className="z-10 max-md:absolute max-md:inset-0 max-md:top-0 max-md:mt-[83px] max-md:p-4 bg-white"  style={{display:open? "block": "none"}}>
               <ul className="flex gap-6 items-center [&>li]:text-lg max-md:flex-col ">
                    {
                        Menu.map((item,index) => <li key={index}><Link className="font-bold tracking-widest " href={item.url}>{item.name}</Link></li>)
                    }
                </ul>
               </div>
            </nav>
            <Button title={"Contato"}/>
            </div>
          </Container>
        </header>
    )
} 