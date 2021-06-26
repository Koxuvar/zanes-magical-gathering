import styles from '../styles/Setgrid.module.scss'
import Image from 'next/image'
import StxImage from '../public/img/strix.jpg'
import KalImage from '../public/img/kaldheim.jpg'
import ZenImage from '../public/img/zendikar2.jpg'
import CoreImage from '../public/img/core2.jpg'
import IkoImage from '../public/img/ikoria3.jpg'

const SetGrid = () => {
    return (

        <div className={styles.container}>
            <div className={styles.card}>
                <Image width={400} height={220} src={StxImage} />
                <h2>Strixhaven: School of Mages</h2>
                <button className={styles.Setbtn}>view the set</button>
            </div>

            <div className={styles.card}>
                <Image width={400} height={220} src={KalImage} />
                <h2>Kaldheim</h2>
                <button className={styles.Setbtn}>view the set</button>
            </div>

            <div className={styles.card}>
                <Image width={380} height={220} src={ZenImage} />
                <h2>Zendikar Rising</h2>
                <button className={styles.Setbtn}>view the set</button>
            </div>

            <div className={styles.card}>
                <Image width={380} height={220} src={CoreImage} />
                <h2>Core Set 2021</h2>
                <button className={styles.Setbtn}>view the set</button>
            </div>

            <div className={styles.card}>
                <Image width={380} height={220} src={IkoImage} />
                <h2>Ikoria: Rise of the Behemoths</h2>
                <button className={styles.Setbtn}>view the set</button>
            </div>
            
        </div>

  
  


    )
}

export default SetGrid
