import { title } from "process"

type props = {
    title:String
    className?:string
    type?: "light" | "dark"
}
export default function Subtitle({title,className, type="light"}:props){
    const bgColorTheme = ()=>{
        if(type=="light"){ return "bg-green-500/10"}
        else if(type=="dark"){ return "text-white bg-white/50"}
    }
    return(
        <span className={`p-1 rounded-lg px-4 inline-flex text-green-500 uppercase font-bold tracking-widest ${bgColorTheme()} ${className} `}>{title}</span>
    )
}