import { forwardRef, HTMLAttributes } from "react"
import CodeBlock from "./CodeBlock"

type props = HTMLAttributes<HTMLDivElement> &{
    open:boolean
    position:{top:number,left:number}
    cssText:string
    codeTitle?:string
    codeType?:string
}

export default function Modal({open,position,cssText,codeType = "css", codeTitle,...rest}:props){

    
    return(
        <div className={`absolute inset-0   flex max-md:justify-center group min-w-full pointer-events-none ${open ? "active":""}`} {...rest}>
            <div className="max-w-[-webkit-fill-available] " >
            <div className={` bottom-0 mb-4  opacity-0 pointer-events-none group-[.active]:opacity-100 group-[.active]:pointer-events-auto transition-all max-md:!ml-0 translate-y-[-105%] max-md:px-4`} style={{marginTop:position.top,marginLeft:position.left}}>
            <CodeBlock  title={codeTitle} code={cssText} language={codeType} className={"shadow-lg shadow-gray-100"}/>
            </div>
            </div>
        </div>
    )
}