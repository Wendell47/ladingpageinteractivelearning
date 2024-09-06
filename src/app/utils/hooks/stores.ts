import { create } from "zustand"


type modalStoreProps = {
    element:EventTarget & Element | null
    open:boolean
    setElement:(element:EventTarget & Element) => void
    setOpen:(open:boolean)=> void
}

const useModalElementStore = create<modalStoreProps>((set)=>(
    {
        element: null,
        open:false,
        setElement:(element) => set({element:element}),
        setOpen:(open)=> set ({open:open})
    }
))

export{useModalElementStore}