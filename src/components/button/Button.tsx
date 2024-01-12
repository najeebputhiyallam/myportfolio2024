"use client"

import { useRouter } from 'next/navigation';
import styles from './button.module.css'

export default function Button({btnType, btnText, btnLink}) {

    //console.log(btnText);
    const router = useRouter();
    const btnClicked = () => {
      //router.push(`/contact?${btnText}`);
      if(btnLink != '' ) router.push(btnLink);
    }

    return(
        <button type={btnType} className={styles.btn} onClick={btnClicked}>{btnText}</button>
    );
};
