
import { Facebook, Instagram, Linkedin } from "react-bootstrap-icons";
import Logo from "../assets/logo";
import Container from "./container";

export default function Footer(){

    const icons = [
        <Instagram/>,
        <Facebook/>,
        <Linkedin/>
    ]

    return(
        <footer className="bg-neutral-900 [&_p]:text-neutral-300 [&_p]:leading-normal">
            <Container className={"py-10"}>
                <div className="flex items-center flex-wrap justify-between gap-y-4">
                <div>
                    <Logo  textColor="white"/>
                    <p>
                    Ecolife, comprometido com 
                    o mundo e buscando transformar.
                    </p>
                </div>
                <div>
                    <p>Siga-nos</p>
                    <div className="flex gap-x-3 gap-y-8 *:text-white text-xl mt-3"> {...icons}</div>
                </div>
                </div>
                <p className="text-center pt-10">Copyrights ©2024 Ecolife. todos os direitos reservados.</p>
            </Container>
        </footer>
    )
}