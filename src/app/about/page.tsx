import { Metadata } from "next";

export const metadata: Metadata = {
    title: "About",
}

export default function AboutPage(){
    return(
        <div className="containerGlobal" > 
            <div className="containerWrapperGlobal" >
            <h1 className="gradientText" >/ About</h1>
            </div>
        </div>
    );
}