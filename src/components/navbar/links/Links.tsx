"use client"

import Link from "next/link";
import styles from '../navbar.module.css'

export default function Links(){

    const links = [
        {
            title: "Home",
            path: "/",
        },
        {
            title: "About",
            path: "/about",
        },
        {
            title: "Skills",
            path: "/skills",
        },
        {
            title: "Experience",
            path: "/experience",
        },
        {
            title: "Projects",
            path: "/projects",
        },
        {
            title: "Contact",
            path: "/contact",
        },                    
    ];

    return (
        <div className={styles.navHolder}>
            <div className={styles.desktopNav}>
                {links.map((link=>(
                    <Link href={link.path} key={link.title}>{link.title}</Link>
                ))
                )}
            </div>

            <div className={styles.mobileNav}>
                <div className={styles.mobileBtn} >CLICK HERE</div>
                <div className={styles.mobileDrawer}>
                    {links.map((link=>(
                        <Link href={link.path} key={link.title}>{link.title}</Link>
                    ))
                    )}
                </div>    
            </div>            
        </div>      
    );
}