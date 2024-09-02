import { BadgeCheck, Carrot, ShoppingBasket, Sprout } from "lucide-react"
import { services } from "../utils/props/data"
import Title from "./Title"
import colors  from 'tailwindcss/colors';


type serviceCardProps = {
    title:String
    description:string
    value:number
}

const Icon = ({value}:{value?:number})=>{
    const size = 24
    const color = colors.green[500]

    switch (value) {
        case 1:
           return <BadgeCheck size={size} color={color}/>
        case 2:
            return <Carrot size={size} color={color}/>
        case 3:
            return <ShoppingBasket size={size} color={color}/>
        case 4:
            return  <Sprout size={size} color={color}/>

    }
}
const ServiceCard = ({title,description,value}:serviceCardProps)=>(
    <div className="p-4 bg-neutral-800 rounded-lg  [&>p]:text-white/60 flex-1 relative flex flex-col">
        <div className="p-3 bg-white inline-flex rounded-full  -mt-10 absolute"><Icon value={value}/></div>
        <Title className="text-white uppercase text-sm mt-6" type="h3">{title}</Title>
        <p className="text-sm flex-1">{description}</p>
    </div>
)

export default function Services(){

    return(
        <div className="flex flex-wrap gap-5">
                {services.map((service,index)=>(
                    <ServiceCard key={index} title={service.title} description={service.description} value={index + 1}/>
                ))}
        </div>
    )
}