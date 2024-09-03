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
          if (window.scrollY > 60) {
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

    function CloseMenuDelay(){
      setTimeout(()=>setOpen(false),200)
    }
 
    return(
        <header className={`z-10 fixed top-0 inset-x-0 py-4 border-b border-black/5  transition-all ${scrolled && "backdrop-blur-2xl bg-white/90"}`}>
          <Container>
            <div className="flex justify-between items-center">
            <Link href={'/'}>
                <Logo/>
            </Link>
            <nav className="group">
                <LucideMenu size={24} onClick={() =>setOpen(!open)} className="md:hidden"/>
               <div className={`z-10 max-md:absolute max-md:inset-0 max-md:top-0 max-md:mt-[73px] max-md:p-4 max-md:bg-white max-md:h-screen ${open ? "max-md:block":"max-md:hidden"} `}>
               <ul className="flex gap-6 items-center [&>li]:text-lg max-md:flex-col ">
                    {
                        Menu.map((item,index) => <li key={index}><Link className="font-bold tracking-widest " href={item.url} onClick={()=>CloseMenuDelay()}>{item.name}</Link></li>)
                    }
                </ul>
               </div>
            </nav>
            <Button title={"Contato"} className="max-md:hidden"/>
            </div>
          </Container>
        </header>
    )
} 