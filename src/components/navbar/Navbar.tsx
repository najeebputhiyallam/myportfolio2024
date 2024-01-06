import styles from "./navbar.module.css"
import Links from "./links/Links";
import Image from "next/image";
import Link from "next/link";

export default function NavBar() {
    return(
        <div className={styles.container} >
            <div>
                <div className={styles.logo} >
                    <Link href="/" >
                        <Image src="/nd-logo.png" alt="logo" fill style={{borderRadius: "0" }} />
                    </Link>
                </div>

                <div className={styles.navLinks} >
                    <Links />
                </div>
            </div>    
        </div>
    );
};
