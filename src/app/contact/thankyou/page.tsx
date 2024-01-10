"use client"

import styles from './thankyou.module.css'

export default function ContactThankyou(){

    return(
        <div className="containerGlobal" > 
            <div className={`${styles.containerWrapperGlobal} containerWrapperGlobal`} >
                <h1 className="gradientText" >/ Thank You</h1>
                <p>Your Message has been send successfully.</p>
            </div>
        </div>
    );
}