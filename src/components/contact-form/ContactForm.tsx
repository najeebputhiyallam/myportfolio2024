"use client"

import React, { useState } from "react";
import styles from './contactform.module.css';
import { submitForm } from "@/actions/formActions";
import { useRef } from "react";
import Button from "../button/Button";

export default function ContactForm(){
    const ref = useRef<HTMLFormElement>(null);

    const [submitBtn, submitBtnClicked ] = useState(false);


    return(
        <form className={styles.form} ref={ref} onSubmit={()=>submitBtnClicked(true)} action={async FormData => { submitBtnClicked(true); await submitForm(FormData); ref.current?.reset(); }} >
            <div className="containerGlobal" > 
                <div className={` ${styles.containerWrapper} containerWrapperGlobal`} >
                    

                    <div className={styles.formDiv}>
                        <label htmlFor="name" >Name</label>
                        <input type="text" name="name" placeholder="Your name" required maxLength={25} minLength={3} />
                    </div>

                    <div className={styles.formDiv}>
                        <label htmlFor="email" >Email</label>
                        <input type="email" name="email" placeholder="youremail@mail.com" required maxLength={35} minLength={6} />
                    </div>

                    <div className={styles.formDiv}>
                        <label htmlFor="message" >Message <span>(maximum 200 Characters)</span></label>
                        <textarea name="message" placeholder="Write your message" required maxLength={200} minLength={5} ></textarea>
                    </div>      

                    <div className={styles.formDiv}>
                        { submitBtn ? (
                            //<button type="button" >Sending Message</button>
                            <Button btnType="button" btnText="Sending Message" btnLink="" />
                        ):(
                            //<button type="submit" >Submit</button>
                            <Button btnType="submit" btnText="Submit" btnLink="" />
                        ) }                        
                    </div>  

                </div>
            </div>
        </form>   
    );
}