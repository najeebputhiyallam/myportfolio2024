import { Metadata } from "next";
import styles from './about.module.css'
import Button from "@/components/button/Button";

export const metadata: Metadata = {
    title: "About",
}

export default function AboutPage(){
    return(
        <div className="containerGlobal" > 
            <div className={`${styles.containerWrapperGlobal} containerWrapperGlobal`} >
            <h1 className="gradientText" >/ About</h1>

                <div className={styles.aboutContent} >
                    <p>
                    Hello,
                    <br /><br />
                    I&apos;m Najeeb, residing and working in Dubai, UAE, with my roots in India. With over 10 years of dedicated experience in web development, I&apos;ve recently delved into Next.js and witnessed the remarkable evolution of the web in recent years. I am particularly fascinated by its advancements and am eager to continue my journey alongside it.
                    <br /><br />    
                    Proficient in HTML, CSS, JavaScript, and jQuery, I leverage my skills to create impactful websites using WordPress with Elementor. My expertise spans the entire website development process, from assisting in domain selection and choosing optimal hosting providers to setting up DNS and fine-tuning websites for peak SEO and performance. Over the years, I&apos;ve had the privilege of collaborating with renowned clients such as REDTAG, Twenty4 Fashion, BMA International Group, Geant, and Eclipse Yoga.
                    <br /><br />    
                    For more insights into my work, please explore other pages on this site. I&apos;m excited about the prospect of working together and bringing your vision to life.
                    <br /><br />
                    Looking forward to potential collaboration soon.
                    <br /><br />
                    Thank you!<br />
                    Najeeb                        
                    </p>

                    <Button btnType="button" btnText="View My Skills" btnLink="/skills" />
                </div>

            </div>
        </div>
    );
}