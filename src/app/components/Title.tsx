import { ReactNode } from "react";
type TitleProps ={
    children:ReactNode
    type?: "h1"|"h2"|"h3",
    className?:string
}
export default function Title({children,type="h1",className}:TitleProps){
    const defaultClasses="[&>span]:text-green-500 font-bold  [&>span]:font-bold only-of-type:mb-6 mb-4 mt-6  "

    const Title = ()=>{
        switch (type) {
            case "h1":
                return <h1 className={`text-h1BodyClamp   ${defaultClasses} ${className}`}>{children}</h1> 
            case "h2":
                return <h2 className={`text-2xl  ${defaultClasses}  ${className}`}>{children}</h2> 
            case "h3":
                return <h3 className={`text-1xl  ${defaultClasses}  ${className}`}>{children}</h3> 
    
        }
            
    }
    return(
        <Title/>
    )
}