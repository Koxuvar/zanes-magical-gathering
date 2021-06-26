import styles from '../styles/Bannedgrid.module.scss'
import Image from 'next/image'
import Link from 'next/link'
import Cauldron from '../public/img/banned/cauldron-familiar.jpg'
import Escape from '../public/img/banned/escape-to-the-wilds.jpg'
import Fires from '../public/img/banned/fires-of-invention.jpg'
import Lucky from '../public/img/banned/lucky-clover.jpg'
import Oko from '../public/img/banned/oko-thief-of-crowns.jpg'
import Omnath from '../public/img/banned/omnath-locus-of-creation.jpg'
import Once from '../public/img/banned/once-upon-a-time.jpg'
import Uro from '../public/img/banned/uro-titan-of-nature-s-wrath.jpg'

const BannedGrid = () => {
    return (

        <>
            <div className={styles.text_hold}>
                <h2>these eight cards are currently banned in standard</h2>
                <h3>click on any of the cards below to learn why</h3>
            </div>
            <div className={styles.grid}>

                <Link href='/CardDisplay'><div className={styles.image_wrap}><Image src={Cauldron} /></div></Link>
                <Link href='/'><div className={styles.image_wrap}><Image src={Escape} /></div></Link>
                <Link href='/'><div className={styles.image_wrap}><Image src={Fires} /></div></Link>
                <Link href='/'><div className={styles.image_wrap}><Image src={Lucky} /></div></Link>
                <Link href='/'><div className={styles.image_wrap}><Image src={Oko} /></div></Link>
                <Link href='/'><div className={styles.image_wrap}><Image src={Omnath} /></div></Link>
                <Link href='/'><div className={styles.image_wrap}><Image src={Once} /></div></Link>
                <Link href='/'><div className={styles.image_wrap}><Image src={Uro} /></div></Link>
                
            </div>

        </>
    )
}

export default BannedGrid
