import { forwardRef, HTMLAttributes, useEffect, useState } from "react"
import CodeBlock from "./CodeBlock"
import { appliedStylesContent } from "../utils/cssLayout"
import { useModalElementStore } from "../utils/hooks/stores"

type props = HTMLAttributes<HTMLDivElement> &{
    codeTitle?:string
    codeType?:string
  
}
type positionProps={top:number,left:number}
type dimensionProps={width:number,height:number,marginBottom:number | string}

export default function Modal({codeType = "css", codeTitle,...rest}:props){
    const {open,element,modalPositionOnElement} = useModalElementStore()
    const[position,setPosition]=useState<positionProps>({left:0,top:0})
    const[dimension,setDimension]=useState<dimensionProps>({width:0,height:0,marginBottom:0})
    const [cssText, setCssText] = useState('')
   
    
    useEffect(()=>{
        if(element && element.id){
            const Element= document.getElementById(element!.id)
            const elementBlockMargin = modalPositionOnElement == "up" ? `-${Element!.offsetHeight}px` : 0

            setPosition({left:Element!.offsetLeft,top:Element!.offsetTop})
            setDimension({width:Element!.offsetWidth,height:Element!.offsetHeight,marginBottom:elementBlockMargin})
       
        
            const styles = window.getComputedStyle(element)

            const appliedStyles = appliedStylesContent
            
            let cssString = '';
            
            appliedStyles?.Subtitle.forEach(property => {
            cssString += `${property}: ${styles.getPropertyValue(property)};\n`;
            });

            setCssText(cssString);
        
        }


        
    },[open])


    
    return(
        <div className={`absolute inset-0 flex max-md:justify-center group min-w-full pointer-events-none ${open ? "active":""}`} {...rest}>
            <div className="max-w-[-webkit-fill-available]">
                <div className={`relative flex max-md:items-center bottom-0 mb-4 z-20  opacity-0 pointer-events-none group-[.active]:opacity-100 group-[.active]:pointer-events-auto transition-opacity max-md:!ml-0  max-md:px-4 ${modalPositionOnElement == "up" ? "-translate-y-full flex-col ":"flex-col-reverse"}`} 
                style={{marginTop:position.top,marginLeft:position.left}}
                >
                <CodeBlock  title={codeTitle} code={cssText} language={codeType} className={"shadow-lg shadow-black/5"}/>
                <div className={`bg-green-300/20 `} style={dimension}></div>
                </div>
            </div>
        </div>
    )
}