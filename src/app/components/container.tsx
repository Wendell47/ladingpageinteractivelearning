import { ReactNode } from "react"

type props ={
    children:ReactNode
    className?:String
}
export default function Container({children, className}:props){
    return(
        <div className={`max-w-7xl mx-auto px-6 ${className}`}>
                {children}
        </div>
    )
}