import Image from 'next/image'
import style from '../styles/AboutMagic.module.scss'
import Banner from '../public/img/magicbanner3.jpg'

const MagicBanner = () => {
    return (
        <div className={style.main}>
        <Image width={1500} height={300} src={Banner} />
    </div>
    )
}

export default MagicBanner