"use client"

import React from "react";
import styles from './contactform.module.css';
import { submitForm } from "@/actions/formActions";
import { useRef } from "react";

export default function ContactForm(){
    const ref = useRef<HTMLFormElement>(null);
    return(
        <form className={styles.form} ref={ref} action={async FormData => { await submitForm(FormData); ref.current?.reset(); }} >
            <div className="containerGlobal" > 
                <div className={` ${styles.containerWrapper} containerWrapperGlobal`} >
                    <h1 className="gradientText" >/ Contact</h1>

                    <div className={styles.formDiv}>
                        <label htmlFor="name" >Name</label>
                        <input type="text" name="name" placeholder="Your name" required />
                    </div>

                    <div className={styles.formDiv}>
                        <label htmlFor="email" >Email</label>
                        <input type="email" name="email" placeholder="youremail@mail.com" required />
                    </div>

                    <div className={styles.formDiv}>
                        <label htmlFor="message" >Message</label>
                        <textarea name="message" placeholder="Write your message" required ></textarea>
                    </div>      

                    <div className={styles.formDiv}>
                        <button type="submit" >Submit</button>
                    </div>  

                </div>
            </div>
        </form>   
    );
}