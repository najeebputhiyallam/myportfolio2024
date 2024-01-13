"use client"

import Link from "next/link";
import styles from '../navbar.module.css'
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function Links(){

    const [navbarOpen, setNavbarOpen ] = useState(false);
    const pathname = usePathname();

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
                
                {links.map((link =>{
                    //const isActive = pathname.startsWith(link.path);
                    let isActive = false;
                    if ( link.path.length > 1 ) {
                        isActive = pathname.startsWith(link.path);
                    } else if ( pathname.length === 1 && pathname === '/' ) {
                        isActive = true;
                    }
                    return (                    
                        <Link className={isActive ? styles.linkActive : ""} href={link.path} key={link.title}>{link.title}</Link>
                    )}
                ))}
            </div>

            <div className={styles.mobileNav}>
                 { navbarOpen ? (
                    <div className={`${styles.mobileBtn} ${styles.mobileBtnFixed}`} onClick={() => setNavbarOpen(prevState => !prevState)} >X</div>
                 ) : (
                    <div className={styles.mobileBtn} onClick={() => setNavbarOpen(prevState => !prevState)} >MENU</div>       
                 )}   
                
                { navbarOpen ? (                                    
                    <div className={styles.mobileDrawer}>
                    {links.map((link=>{
                        let isActive = false;
                        if ( link.path.length > 1 ) {
                            isActive = pathname.startsWith(link.path);
                        } else if ( pathname.length === 1 && pathname === '/' ) {
                            isActive = true;
                        }                        
                        return (
                        <Link className={isActive ? styles.linkActive : ""} href={link.path} key={link.title}>{link.title}</Link>
                        )}
                    ))}
                    </div>  
                ) : (
                    undefined
                ) }
  
            </div>            
        </div>      
    );
}