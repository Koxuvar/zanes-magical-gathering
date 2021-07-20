import styles from '../styles/AboutMagic.module.scss'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import MagicBanner from '../components/MagicBanner'


const About = () => {
    return (
          
        <div>
            <Nav />
            <MagicBanner />
            <div className={styles.container}>
                <div className={styles.main}>
                <div className={styles.grid}>
                <div className={styles.card}>
                    <h2 className={styles.h2}>
            From monseter-filled forgotten realms, mages and their struggles on Arcavios, all the way to the Cult of Rakdos and joining the Operation Desperation, Magic: The Gathering has created a new world in which all of us are invited to reach passed our world to one that holds more adventure and experience than most encounter in their lifetime. 
</h2>
<h2 className={styles.h2}>
            Created just for you is an aid through your adventures as you compete in challenges in the magic world. Search cards that you have or have not heard of. Keep counts of your choosing such as lives, tokens , +1+1 and anything else you desire. Have a registry that is your own to see statistics of your adventures. Enjoy Magic: The Gathering to its fullest.
            </h2>
                </div>
                </div>
                </div>
            </div>
        



            <Footer />
        </div>
    )
}

export default About