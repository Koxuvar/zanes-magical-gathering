import styles from '../styles/SetLayout.module.scss'
import Nav from '../components/Nav'
import Image from 'next/image'
import Link from 'next/link'
import one from '../public/img/stx-dummy/one.jpg'
import two from '../public/img/stx-dummy/two.jpg'
import three from '../public/img/stx-dummy/three.jpg'
import four from '../public/img/stx-dummy/four.jpg'
import five from '../public/img/stx-dummy/five.jpg'
import six from '../public/img/stx-dummy/six.jpg'
import seven from '../public/img/stx-dummy/seven.jpg'
import eight from '../public/img/stx-dummy/eight.jpg'
import nine from '../public/img/stx-dummy/nine.jpg'
import ten from '../public/img/stx-dummy/ten.jpg'
import eleven from '../public/img/stx-dummy/eleven.jpg'
import twelve from '../public/img/stx-dummy/twelve.jpg'
import thirteen from '../public/img/stx-dummy/thirteen.jpg'
import fourteen from '../public/img/stx-dummy/fourteen.jpg'
import fifteen from '../public/img/stx-dummy/fifteen.jpg'
import sixteen from '../public/img/stx-dummy/sixteen.jpg'




const SetDisplay = () => {
    return (
       <>
        <Nav />

        <div className={styles.container}>

            <Link href='/'><div className={styles.image_wrap}><Image src={one} /></div></Link>
            <Link href='/'><div className={styles.image_wrap}><Image src={two} /></div></Link>
            <Link href='/'><div className={styles.image_wrap}><Image src={three} /></div></Link>
            <Link href='/'><div className={styles.image_wrap}><Image src={four} /></div></Link>
            <Link href='/'><div className={styles.image_wrap}><Image src={five} /></div></Link>
            <Link href='/'><div className={styles.image_wrap}><Image src={six} /></div></Link>
            <Link href='/'><div className={styles.image_wrap}><Image src={seven} /></div></Link>
            <Link href='/'><div className={styles.image_wrap}><Image src={eight} /></div></Link>
            <Link href='/'><div className={styles.image_wrap}><Image src={nine} /></div></Link>
            <Link href='/'><div className={styles.image_wrap}><Image src={ten} /></div></Link>
            <Link href='/'><div className={styles.image_wrap}><Image src={eleven} /></div></Link>
            <Link href='/'><div className={styles.image_wrap}><Image src={twelve} /></div></Link>
            <Link href='/'><div className={styles.image_wrap}><Image src={thirteen} /></div></Link>
            <Link href='/'><div className={styles.image_wrap}><Image src={fourteen} /></div></Link>
            <Link href='/'><div className={styles.image_wrap}><Image src={fifteen} /></div></Link>
            <Link href='/'><div className={styles.image_wrap}><Image src={sixteen} /></div></Link>
        </div>
       </>
    )
}

export default SetDisplay
