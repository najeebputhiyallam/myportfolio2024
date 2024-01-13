import { Metadata } from "next";
import styles from './skills.module.css'
import Button from "@/components/button/Button";

export const metadata: Metadata = {
    title: "Skills",
}

export default function SkillsPage(){
    return(
        <div className="containerGlobal" > 
            <div className={`${styles.containerWrapperGlobal} containerWrapperGlobal`} >
                <h1 className="gradientText" >/ Skills</h1>

                <div className={styles.skillsContent} >
                    <ul className={styles.skillsList} >
                        <li>Next.js</li>
                        <li>Elementor</li>
                        <li>Wordpress</li>
                        <li>WooCommerce</li>
                        <li>Shopify</li>
                        <li>Photoshop</li>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>jQuery</li>
                        <li>JavaScript</li>
                        <li>SEO</li>
                        <li>Website Optimization</li>
                        <li>PHP</li>
                        <li>MySQL</li>
                        <li>Figma</li>
                        <li>Domain Management</li>
                        <li>Web Design</li>
                    </ul>
                    <p>In short, I can manage the entire A to Z process of website development, including selecting the domain, choosing the best hosting provider, and ultimately launching your website.</p>

                    <Button btnType="button" btnText="View My Experience" btnLink="/experience" />
                </div>                
            </div>
        </div>
    );
}