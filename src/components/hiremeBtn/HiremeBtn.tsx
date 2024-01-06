"use client"

import { useRouter } from 'next/navigation';
import styles from './hireme.module.css'

export default function HireMeBtn() {
    const router = useRouter();
    const hireMeBtn = () => {
      router.push("/contact");
    }

    return(
        <button className={styles.btnHireme} onClick={hireMeBtn}>Hire Me</button>
    );
};
