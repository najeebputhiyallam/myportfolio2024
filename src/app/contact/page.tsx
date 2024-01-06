import { Metadata } from "next";
import styles from '../contact/contact.module.css'

export const metadata: Metadata = {
    title: "Contact",
}

export default function ContactPage(){
    return(
        <div className="containerGlobal" > 
            <div className={` ${styles.containerWrapper} containerWrapperGlobal`} >
                <h1 className="gradientText" >/ Contact</h1>

                <form className={styles.form} >
                    <div className={styles.formDiv}>
                        <label htmlFor="name" >Name</label>
                        <input name="name" id="name" value="" placeholder="Your name" />
                    </div>

                    <div className={styles.formDiv}>
                        <label htmlFor="email" >Email</label>
                        <input name="email" id="email" value="" placeholder="youremail@mail.com" />
                    </div>

                    <div className={styles.formDiv}>
                        <label htmlFor="message" >Message</label>
                        <textarea name="message" id="message" placeholder="Write your message" ></textarea>
                    </div>      

                    <div className={styles.formDiv}>
                        <button >Submit</button>
                    </div>                              
                </form>

            </div>
        </div>
    );
}