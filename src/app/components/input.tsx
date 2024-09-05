import {  InputHTMLAttributes } from "react"
import { EnvelopeFill, Key, KeyFill, Mailbox, Person, PersonFill, Phone, PhoneFill, TelephoneFill } from "react-bootstrap-icons"

type props = InputHTMLAttributes<HTMLInputElement> & nameProps

type nameProps ={
    iconName?:"Person" | "Key" | "Phone" | "Mailbox"
}


const icons =[
    {
        name:"Person",
        icon:<PersonFill/>,
    },
    {
        name:"Key",
        icon:<KeyFill/>,
    },
    {
        name:"Phone",
        icon:<TelephoneFill/>,
    },
    {
        name:"Mailbox",
        icon:<EnvelopeFill/>,
    },
    
]

export default function Input({iconName,...rest}:props){
    const Icon = icons.find(icon => icon.name === iconName)?.icon
    
    return(
        <div className=" overflow-hidden rounded-xl bg-white group focus-within:outline outline-2 outline-green-500 flex  items-center *:text-lg">
            {Icon && <div className="p-3 pr-0 *:text-gray-300 *:group-focus-within:text-green-500">{Icon}</div>} <input className="p-3 bg-transparent focus-visible:outline-none w-full" {...rest}/>
        </div>
    )
}