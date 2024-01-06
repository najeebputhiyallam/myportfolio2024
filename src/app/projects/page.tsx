import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Projects",
}

export default function ProjectsPage(){
    return(
        <div className="containerGlobal" > 
            <div className="containerWrapperGlobal" >
            <h1 className="gradientText" >/ Projects</h1>
            </div>
        </div>
    );
}