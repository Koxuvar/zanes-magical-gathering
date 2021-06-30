import styles from '../styles/Cardqueuedisplay.module.scss'
import Link from 'next/link'
import Image from 'next/image'
import Green from '../public/img/decks/green-deck.png'
import Blue from '../public/img/decks/blue-deck.png'
import White from '../public/img/decks/white-deck.png'
import Quakebringer from '../public/img/quakebringer.png'
import Sulfurous from '../public/img/sulfuroussprings.png'
import Sanitarium from '../public/img/sanitariumskeleton.png'
import Execute from '../public/img/execute.png'
import Patchwork from '../public/img/patchworkgnomes.png'
import Chronostutter from '../public/img/chronostutter.png'
import Stroke from '../public/img/strokeofgenius.png'
import Rouse from '../public/img/rousethemob.png'
import Island from '../public/img/island.png'
import Stoneforge from '../public/img/stoneforgemystic.png'
import Magus from '../public/img/magusofthevineyard.png'
import Immaculate from '../public/img/immaculatemagistrate.png'
// import Jhoiras from '../public/img/jhoirasfamiliar.png'
 
const saveTo = (e) => {
    console.log('card saved')
    console.log(e)

}


const Profile = () => {
    return (
        <div className={styles.grid}>
                                    <div className={styles.card}>
                <Image width={217} height={300} src={Green} />
                <h2>Green Deck</h2>
                <Link href='/profile/greendeck'><button onClick={saveTo} className={styles.Setbtn1}>View Green Deck</button></Link>
 
            </div>
            <div className={styles.card}>
                <Image width={217} height={300} src={Blue} />
                <h2>Blue Deck</h2>
                <Link href='/profile/greendeck'><button onClick={saveTo} className={styles.Setbtn2}>View Blue Deck</button></Link>

            </div>
            <div className={styles.card}>
                <Image width={217} height={300} src={White} />
                <h2>White Deck</h2>
                <Link href='/profile/greendeck'><button onClick={saveTo} className={styles.Setbtn3}>View White Deck</button></Link>

            </div>
                        <div className={styles.card}>
                <Image width={217} height={300} src={Quakebringer} />
                <h2>Quakebringer</h2>
                <Link href='/profile/greendeck'><button onClick={saveTo} className={styles.Setbtn1}>Save to Green Deck</button></Link>
                <Link href='/profile/bluedeck'><button onClick={saveTo} className={styles.Setbtn2}>Save to Blue Deck</button></Link>
                <Link href='/profile/whitedeck'><button onClick={saveTo} className={styles.Setbtn3}>Save to White Deck</button></Link>
            </div>

            <div className={styles.card}>
                <Image width={217} height={300} src={Sulfurous} />
                <h2>Sulfurous Springs</h2>
                <Link href='/profile/greendeck'><button onClick={saveTo} className={styles.Setbtn1}>Save to Green Deck</button></Link>
                <Link href='/profile/bluedeck'><button onClick={saveTo} className={styles.Setbtn2}>Save to Blue Deck</button></Link>
                <Link href='/profile/whitedeck'><button onClick={saveTo} className={styles.Setbtn3}>Save to White Deck</button></Link>
            </div>

            <div className={styles.card}>
                <Image width={217} height={300} src={Sanitarium} />
                <h2>Sanitarium Skeleton</h2>
                <Link href='/profile/greendeck'><button onClick={saveTo} className={styles.Setbtn1}>Save to Green Deck</button></Link>
                <Link href='/profile/bluedeck'><button onClick={saveTo} className={styles.Setbtn2}>Save to Blue Deck</button></Link>
                <Link href='/profile/whitedeck'><button onClick={saveTo} className={styles.Setbtn3}>Save to White Deck</button></Link>
            </div>

            <div className={styles.card}>
                <Image width={300} height={300} src={Execute} />
                <h2>Execute</h2>
                <Link href='/profile/greendeck'><button onClick={saveTo} className={styles.Setbtn1}>Save to Green Deck</button></Link>
                <Link href='/profile/bluedeck'><button onClick={saveTo} className={styles.Setbtn2}>Save to Blue Deck</button></Link>
                <Link href='/profile/whitedeck'><button onClick={saveTo} className={styles.Setbtn3}>Save to White Deck</button></Link>
            </div>

            <div className={styles.card}>
                <Image width={300} height={300} src={Patchwork} />
                <h2>Patchwork Gnomes</h2>
                <Link href='/profile/greendeck'><button onClick={saveTo} className={styles.Setbtn1}>Save to Green Deck</button></Link>
                <Link href='/profile/bluedeck'><button onClick={saveTo} className={styles.Setbtn2}>Save to Blue Deck</button></Link>
                <Link href='/profile/whitedeck'><button onClick={saveTo} className={styles.Setbtn3}>Save to White Deck</button></Link>
            </div>

            <div className={styles.card}>
                <Image width={300} height={300} src={Chronostutter} />
                <h2>Chronostrutter</h2>
                <Link href='/profile/greendeck'><button onClick={saveTo} className={styles.Setbtn1}>Save to Green Deck</button></Link>
                <Link href='/profile/bluedeck'><button onClick={saveTo} className={styles.Setbtn2}>Save to Blue Deck</button></Link>
                <Link href='/profile/whitedeck'><button onClick={saveTo} className={styles.Setbtn3}>Save to White Deck</button></Link>
            </div>

            <div className={styles.card}>
                <Image width={300} height={300} src={Stroke} />
                <h2>Stroke of Genius</h2>
                <Link href='/profile/greendeck'><button onClick={saveTo} className={styles.Setbtn1}>Save to Green Deck</button></Link>
                <Link href='/profile/bluedeck'><button onClick={saveTo} className={styles.Setbtn2}>Save to Blue Deck</button></Link>
                <Link href='/profile/whitedeck'><button onClick={saveTo} className={styles.Setbtn3}>Save to White Deck</button></Link>
            </div>

            <div className={styles.card}>
                <Image width={300} height={300} src={Rouse} />
                <h2>Rouse the Mob</h2>
                <Link href='/profile/greendeck'><button onClick={saveTo} className={styles.Setbtn1}>Save to Green Deck</button></Link>
                <Link href='/profile/bluedeck'><button onClick={saveTo} className={styles.Setbtn2}>Save to Blue Deck</button></Link>
                <Link href='/profile/whitedeck'><button onClick={saveTo} className={styles.Setbtn3}>Save to White Deck</button></Link>
            </div>

            <div className={styles.card}>
                <Image width={300} height={300} src={Island} />
                <h2>Island</h2>
                <Link href='/profile/greendeck'><button onClick={saveTo} className={styles.Setbtn1}>Save to Green Deck</button></Link>
                <Link href='/profile/bluedeck'><button onClick={saveTo} className={styles.Setbtn2}>Save to Blue Deck</button></Link>
                <Link href='/profile/whitedeck'><button onClick={saveTo} className={styles.Setbtn3}>Save to White Deck</button></Link>
            </div>

            <div className={styles.card}>
                <Image width={300} height={300} src={Stoneforge} />
                <h2>Stoneforge Mystic</h2>
                <Link href='/profile/greendeck'><button onClick={saveTo} className={styles.Setbtn1}>Save to Green Deck</button></Link>
                <Link href='/profile/bluedeck'><button onClick={saveTo} className={styles.Setbtn2}>Save to Blue Deck</button></Link>
                <Link href='/profile/whitedeck'><button onClick={saveTo} className={styles.Setbtn3}>Save to White Deck</button></Link>
            </div>

            <div className={styles.card}>
                <Image width={300} height={300} src={Magus} />
                <h2>Magus of the Vineyard</h2>
                <Link href='/profile/greendeck'><button onClick={saveTo} className={styles.Setbtn1}>Save to Green Deck</button></Link>
                <Link href='/profile/bluedeck'><button onClick={saveTo} className={styles.Setbtn2}>Save to Blue Deck</button></Link>
                <Link href='/profile/whitedeck'><button onClick={saveTo} className={styles.Setbtn3}>Save to White Deck</button></Link>
            </div>

            <div className={styles.card}>
                <Image width={300} height={300} src={Immaculate} />
                <h2>Immaculate Magistrate</h2>
                <Link href='/profile/greendeck'><button onClick={saveTo} className={styles.Setbtn1}>Save to Green Deck</button></Link>
                <Link href='/profile/bluedeck'><button onClick={saveTo} className={styles.Setbtn2}>Save to Blue Deck</button></Link>
                <Link href='/profile/whitedeck'><button onClick={saveTo} className={styles.Setbtn3}>Save to White Deck</button></Link>
            </div>

        </div>
    )

}

export default Profile