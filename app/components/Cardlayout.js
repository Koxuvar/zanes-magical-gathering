import styles from '../styles/Cardlayout.module.scss'
import Image from 'next/image'
import Cauldron from '../public/img/banned/cauldron-familiar.jpg'

const Cardlayout = () => {
    return (
        <div className={styles.container}>
            
            <div className={styles.image_wrap}>
                <Image src={Cauldron} />
            </div>

            <div className={styles.info}>
                <div className={styles.heading}>
                    <h1>Cauldron Familiar</h1>
                </div>
                <div className={styles.heading}>
                    <h1>Creature - Cat</h1>
                </div>
                <div className={styles.heading}>
                    <h1>When Cauldron Familiar enters the battlefield, each opponent loses 1 life and you gain 1 life.</h1>
                    <h1>Sacrifice a Food: Return Cauldron Familiar from your graveyard to the battlefield.</h1>
                </div>
                <div className={styles.heading}>
                    <h2>Every day the cat returns to kill the same mouse, which sinks again into the cauldron’s brew.</h2>
                </div>

                

            </div>
            
        </div>
    )
}

export default Cardlayout
