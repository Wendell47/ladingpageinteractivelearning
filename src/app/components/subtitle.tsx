"use client"
import { DOMAttributes, forwardRef, HTMLAttributes } from "react"
import { useModalElementStore } from "../utils/hooks/stores"

type props = DOMAttributes<HTMLSpanElement> & HTMLAttributes<HTMLSpanElement> & {
    title:String
    className?:string
    type?: "light" | "dark"
    
}

type Props = {
    event:EventTarget & Element
    
  }
 const Subtitle = forwardRef<HTMLSpanElement,props>(({title,className, type="light",...rest},ref)=>{

    const {element,open,setElement,setOpen}=useModalElementStore()

    function handleElement({event}:Props){
        setElement(event)
        setOpen(true)

    }
    const bgColorTheme = ()=>{
        if(type=="light"){ return "bg-green-500/10"}
        else if(type=="dark"){ return "text-white bg-white/50"}
    }

    return(
        <span className={`p-1 rounded-lg px-4 inline-flex text-green-500 uppercase font-bold tracking-widest ${bgColorTheme()} ${className} `} onMouseEnter={(e)=>handleElement({event:e.currentTarget})}  ref={ref} {...rest}>{title}
        </span>
    )
})
Subtitle.displayName = "Subtitle"

export {Subtitle}