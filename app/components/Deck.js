import styles from '../styles/Carddeckdisplay.module.scss'
import Image from 'next/image'
import Greendeck from '../public/img/decks/green-deck.png'
import Bluedeck from '../public/img/decks/blue-deck.png'
import Whitedeck from '../public/img/decks/white-deck.png'

wassssaaaappppp

const CurrDeck = () => {
    return (
        <div className={styles.container}>

            <div className={styles.image_wrap}>
            <Image src={Greendeck} />

        </div>
        <div className={styles.image_wrap}>
            <Image src={Bluedeck} />

        </div>
        <div className={styles.image_wrap}>
            <Image src={Whitedeck} />

        </div>
        </div>

    )


}

export default CurrDeck
