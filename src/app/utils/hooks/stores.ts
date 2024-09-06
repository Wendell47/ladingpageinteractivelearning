import { create } from "zustand"

type positionOnElement = "up" | "bottom"

type modalStoreProps = {
    element:EventTarget & Element | null
    open:boolean
    modalPositionOnElement:positionOnElement
    setElement:(element:EventTarget & Element) => void
    setOpen:(open:boolean)=> void
    setPositionOnElement:(position:positionOnElement)=> void
}

const useModalElementStore = create<modalStoreProps>((set)=>(
    {
        element: null,
        open:false,
        modalPositionOnElement:"up",
        setElement:(element) => set({element:element}),
        setOpen:(open)=> set ({open:open}),
        setPositionOnElement:(positionOnElement) => set({modalPositionOnElement:positionOnElement})
    }
))

export{useModalElementStore}