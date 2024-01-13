import { Metadata } from "next";
import ContactForm from '@/components/contact-form/ContactForm';
import styles from './contact.module.css'


export const metadata: Metadata = {
    title: "Contact",
}

export default function ContactPage(){
    return(
        <div className="containerGlobal" > 
            <div className={`${styles.containerWrapperGlobal} containerWrapperGlobal`} >
                <h1 className="gradientText" >/ Contact</h1>

                <div className={styles.contactContent} >
                    <ContactForm />
                </div>    
            
            </div>
        </div>
    );
}