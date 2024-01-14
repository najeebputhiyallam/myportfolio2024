import { Metadata } from "next";
import styles from './projects.module.css'
import Button from "@/components/button/Button";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Projects",
}


export default function ProjectsPage(){


    return(
        <div className="containerGlobal" > 
            <div className={`${styles.containerWrapperGlobal} containerWrapperGlobal`} >
                <h1 className="gradientText" >/ Projects</h1>

                <div className={styles.projectContent} >
                    <div className={styles.projectBoxHolder} >

                    </div>

                    <Button btnType="button" btnText="Contact me" btnLink="/contact" />
                </div>

                
            </div>
        </div>
    );
}