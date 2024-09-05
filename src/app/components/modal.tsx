import { forwardRef, HTMLAttributes, useEffect, useState } from "react"
import CodeBlock from "./CodeBlock"
import { appliedStylesContent } from "../utils/cssLayout"

type props = HTMLAttributes<HTMLDivElement>  &{
    elementId:EventTarget & Element
    codeTitle?:string
    codeType?:string
    open:boolean
}
type positionProps={top:number,left:number}
type dimensionProps={width:number,height:number,marginBottom:number | string}

export default function Modal({elementId,codeType = "css", codeTitle,open,...rest}:props){

    const[position,setPosition]=useState<positionProps>({left:0,top:0})
    const[dimension,setDimension]=useState<dimensionProps>({width:0,height:0,marginBottom:0})
    const[percent,setPercent]=useState(0)
    const [cssText, setCssText] = useState('')
   
    
    useEffect(()=>{
        if(elementId.id){
            const element= document.getElementById(elementId.id)
        setPosition({left:element!.offsetLeft,top:element!.offsetTop})
        setDimension({width:element!.offsetWidth,height:element!.offsetHeight,marginBottom:`-${element!.offsetHeight}px`})
        setPercent(100-((dimension.height/100)*100))
        
        const styles = window.getComputedStyle(elementId)

        const appliedStyles = appliedStylesContent
        
        let cssString = '';
        
        appliedStyles?.Subtitle.forEach(property => {
        cssString += `${property}: ${styles.getPropertyValue(property)};\n`;
        });

        setCssText(cssString);

       
        
        }


        
    },[open])


    
    return(
        <div className={`absolute inset-0   flex max-md:justify-center group min-w-full pointer-events-none ${open ? "active":""}`} {...rest}>
            <div className="max-w-[-webkit-fill-available] " >
            <div className={`flex flex-col max-md:items-center bottom-0 mb-4  opacity-0 pointer-events-none group-[.active]:opacity-100 group-[.active]:pointer-events-auto transition-opacity max-md:!ml-0  max-md:px-4`} style={{marginTop:position.top,marginLeft:position.left,transform:`translate(0px,-100%)`}}>
            <CodeBlock  title={codeTitle} code={cssText} language={codeType} className={"shadow-lg shadow-black/5"}/>
            <div className={`bg-green-300/20 `} style={dimension}></div>
            </div>
            </div>
        </div>
    )
}