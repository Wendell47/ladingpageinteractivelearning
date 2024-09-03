import { props } from "../utils/props/props";

type buttonProps = props &{
        type?: "primary" 
        className?:string
}
export default function Button({title, type,className}:buttonProps){
    return(
        <button className={`p-3 px-6 rounded-lg uppercase tracking-wider font-bold   ${type == "primary" ? "bg-green-500 text-white  shadow-lg shadow-green-200" : "border border-green-500 text-green-500"} ${className}`}>
                {title}
        </button>
    )
}