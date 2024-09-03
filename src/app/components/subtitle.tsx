
import { DOMAttributes, forwardRef } from "react"

type props = DOMAttributes<HTMLSpanElement> & {
    title:String
    className?:string
    type?: "light" | "dark"
    
}
 const Subtitle = forwardRef<HTMLSpanElement,props>(({title,className, type="light",...rest},ref)=>{

    const bgColorTheme = ()=>{
        if(type=="light"){ return "bg-green-500/10"}
        else if(type=="dark"){ return "text-white bg-white/50"}
    }
    return(
        <span className={`p-1 rounded-lg px-4 inline-flex text-green-500 uppercase font-bold tracking-widest ${bgColorTheme()} ${className} `} {...rest} ref={ref}>{title}
        </span>
    )
})
Subtitle.displayName = "Subtitle"

export {Subtitle}