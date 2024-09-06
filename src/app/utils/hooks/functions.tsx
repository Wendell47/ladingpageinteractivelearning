"use client"
import { eventProps } from "@/app/components/subtitle"
import { useModalElementStore } from "./stores"

const useHandleElement = () =>{
    const {setElement,setOpen,setPositionOnElement}=useModalElementStore()

    const handleElement = ({event}:eventProps)=>{
     
    
        event.id === "heroSubtitle" ? setPositionOnElement("bottom"): setPositionOnElement("up")
        setElement(event)
        setOpen(true)
    
    }
    return handleElement
}

export {useHandleElement}