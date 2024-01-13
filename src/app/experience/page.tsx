import { Metadata } from "next";
import styles from './experience.module.css'
import Button from "@/components/button/Button";

export const metadata: Metadata = {
    title: "Experience",
}

export default function ExperiencePage(){
    return(
        <div className="containerGlobal" > 
            <div className={`${styles.containerWrapperGlobal} containerWrapperGlobal`} >
                <h1 className="gradientText" >/ Experience</h1>

                <div className={styles.experienceContent} >
                    <div className={styles.expBox}>
                        <p>
                            Web Developer <br />
                            <span>at Orangerie Advertising DMCC</span>
                        </p>

                        <p>6 Years: Jan 2017 - Present</p>
                    </div>

                    <div className={styles.expBox}>
                        <p>
                            Web Trainer <br />
                            <span>at SEO Planet</span>
                        </p>

                        <p>1.5 Years: Jun 2015 - Nov 2016</p>
                    </div>

                    <div className={styles.expBox}>
                        <p>
                            Web Developer <br />
                            <span>at DM3 Agency, DIC</span>
                        </p>

                        <p>1 Year: Apr 2014 - Mar 2015</p>
                    </div>

                    <div className={styles.expBox}>
                        <p>
                            Front End Developer <br />
                            <span>at Buzinessware, DSO</span>
                        </p>

                        <p>1.4 Years: Oct 2012 - Feb 2014</p>
                    </div>

                    <div className={styles.expBox}>
                        <p>
                            Front End Developer <br />
                            <span>at LBi, DMC</span>
                        </p>

                        <p>1 Year: Jul 2011 - Jul 2012</p>
                    </div>

                    <div className={styles.expBox}>
                        <p>
                            Web Designer <br />
                            <span>at Snyxius Technologies</span>
                        </p>

                        <p>3.5 Years: Dec 2007 - May 2011</p>
                    </div>

                    <Button btnType="button" btnText="View My Projects" btnLink="/projects" />                                                                              
                </div>  

                
            </div>
        </div>
    );
}