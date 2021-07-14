import styles from '../styles/ProfileShowcase.module.scss'
import Image from 'next/image'
import proPic from '../public/img/dummy_propic.png'



const ProfileShowcase = () => {
    return (
        <>
          
          <div className={styles.top_container}>

            <div className={styles.img_wrap}>
                <Image src={proPic} />
            </div>

            <div className={styles.display_info}>

                <div className={styles.data_card}>
                <h1>username</h1>
                <h2>zane</h2>
                </div>

                <div className={styles.data_card}>
                    <h1>games played</h1>
                    <h2>2000</h2>
                </div>

                <div className={styles.data_card}>
                    <h1>last login</h1>
                    <h2>07.14.2021</h2>
                </div>
            </div>

            <div className={styles.display_data}>

                <div className={styles.deck_name}>

                    <h1>U/R Blitz</h1>
                    <h1>U/W Miracles</h1>
                    <h1>Esper Stoneblade</h1>
                    <h1>Bant Control</h1>
                    
                </div>
                
                <div className={styles.win_pct}>
                    <h1>58.5%</h1>
                    <h1>55.7%</h1>
                    <h1>59.7%</h1>
                    <h1>61.8%</h1>
                </div>
                
            </div>

            <div className={styles.overall}>

                <h1>overall win percentage: 58.9%</h1>
                <h1>current win streak: 7</h1>
            </div>

          </div>
          
        </>
    )
}

export default ProfileShowcase
