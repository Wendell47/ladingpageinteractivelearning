import { title } from "process"

type props = {
    title:String
    className?:string
}
export default function Subtitle({title,className}:props){
    return(
        <span className={`p-1 rounded-lg px-4 inline-flex text-green-500 bg-green-50 uppercase font-bold tracking-widest ${className}`}>{title}</span>
    )
}