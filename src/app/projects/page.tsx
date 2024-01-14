import { Metadata } from "next";
import styles from './projects.module.css'
import Button from "@/components/button/Button";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Projects",
}

async function getData() {
    const res = await fetch(`${process.env.SITEBASEURL}api/project-list`, { method: 'GET' });
    //const res = await fetch(`${process.env.SITEBASEURL}api/projects`)
    //const res = await fetch("https://next.najeebdigital.xyz/api/projects")
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.

    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data - Something wrong this page')
    }
   
    return res.json()
  }

export default async function ProjectsPage(){

    const data = await getData();
    //console.log( data );

    return(
        <div className="containerGlobal" > 
            <div className={`${styles.containerWrapperGlobal} containerWrapperGlobal`} >
                <h1 className="gradientText" >/ Projects</h1>

                <div className={styles.projectContent} >
                    <div className={styles.projectBoxHolder} >
                        
                            { 
                                data.map( (project: { id: string; img: string; url: string; title: string; }) => (
                                    <div key={project.id} className={styles.projectBox} >
                                        <div className={styles.projectBoxWrapper} >
                                            <Image src={project.img} alt="" fill style={{objectFit: "contain", borderRadius: "0" }} />
                                            <p>{project.title}</p>
                                            <p><Link href={project.url} target='_blank'>{project.url}</Link></p>
                                        </div>    
                                    </div>
                                ))                                
                            }
                        
                    </div>

                    <Button btnType="button" btnText="Contact me" btnLink="/contact" />
                </div>

                
            </div>
        </div>
    );
}