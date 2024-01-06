import Link from 'next/link';
import styles from './footer.module.css'

export default function Footer(){    
    return(
        <div className="containerGlobal" >  
            <div className={`${styles.containerWrapper} containerWrapperGlobal`} >
                <div><Link href="/" >&copy; Najeeb Puthiyapattillath</Link></div>
                <div>Powered by <Link href="https://nextjs.org/" target='_blank' >Next.js</Link></div>
                <div><Link href="https://www.linkedin.com/in/najeebp/" target='_blank' >LinkedIn Profile</Link></div>
            </div>    
        </div>
    );
}