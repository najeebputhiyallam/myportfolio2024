import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Skills",
}

export default function SkillsPage(){
    return(
        <div className="containerGlobal" > 
            <div className="containerWrapperGlobal" >
            <h1 className="gradientText" >/ Skills</h1>
            </div>
        </div>
    );
}