import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';
import { Metadata } from "next";
import styles from '../contact/contact.module.css'


export const metadata: Metadata = {
    title: "Contact",
}

export default function ContactPage(){

    const submitForm = async (formData) => {
        "use server";
        //console.log(formData.get('name'));
        const nameValue = formData.get('name');
        const emailValue = formData.get('email');
        const messageValue = formData.get('message');
        await sql`INSERT INTO contact (Name, Email, Message) VALUES (${nameValue}, ${emailValue}, ${messageValue});`;
    }

    return(

        <form className={styles.form} action={submitForm} >
            <div className="containerGlobal" > 
                <div className={` ${styles.containerWrapper} containerWrapperGlobal`} >
                    <h1 className="gradientText" >/ Contact</h1>

                    <div className={styles.formDiv}>
                        <label htmlFor="name" >Name</label>
                        <input type="text" name="name" placeholder="Your name" />
                    </div>

                    <div className={styles.formDiv}>
                        <label htmlFor="email" >Email</label>
                        <input type="text" name="email" placeholder="youremail@mail.com" />
                    </div>

                    <div className={styles.formDiv}>
                        <label htmlFor="message" >Message</label>
                        <textarea name="message" placeholder="Write your message" ></textarea>
                    </div>      

                    <div className={styles.formDiv}>
                        <button type="submit" >Submit</button>
                    </div>  

                </div>
            </div>
        </form>    
    );
}