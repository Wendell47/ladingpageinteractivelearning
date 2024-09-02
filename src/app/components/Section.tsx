import { ReactNode } from "react";
import Container from "./container";


type SectionProps ={
    children:ReactNode,
    className?:string
}



export default function Section({children,className}:SectionProps){

    return(
        <Container>

            <div className={`flex [&>div]:flex-1 max-lg:flex-col items-center flex-wrap gap-4 py-10 lg:py-40 max-lg:[&>*]:text-center ${className}`}>
                   
                    {children}
            </div>
        </Container>
    )
}