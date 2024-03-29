import Image from 'next/image'
import styles from './page.module.css'
import Button from '@/components/button/Button'

export default function Home() {
  //throw new Error('Error in Home');



  return (
    <div className={`${styles.container} containerGlobal`} >    
      <div className={`${styles.containerExtend} containerExtendGlobal`}>
        <div className={`${styles.containerWrapper} containerWrapperGlobal`} >
          <div className={styles.heroTxt}>
            <h1 className="gradientText">Najeeb Puthiyapattillath</h1>
            <h2>Next.js Developer | Elementor Expert | Front End Developer</h2>
            
            <div className={styles.btnHolder} >
              <Button btnType="button" btnText="Hire Me" btnLink="/contact" />
            </div>
          </div>

          <div className={styles.heroImg}>
            <Image src="/animation-1704197158711_4f154d83.gif" priority={true} alt="logo" fill style={{objectFit: "contain", borderRadius: "0" }} />
          </div>
        </div>
      </div>  

    </div>
  )
}
