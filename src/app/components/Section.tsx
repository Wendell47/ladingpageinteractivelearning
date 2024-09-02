import { ReactNode } from "react";
import Container from "./container";
import Subtitle from "./subtitle";
import { props } from "../utils/props/props";

type SectionProps ={
    children:ReactNode,
    className?:string
}



export default function Section({children,className}:SectionProps){

    return(
        <Container>

            <div className={`flex [&>div]:flex-1 flex-wrap gap-4 py-52 ${className}`}>
                   
                    {children}
            </div>
        </Container>
    )
}