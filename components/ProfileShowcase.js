import styles from '../styles/ProfileShowcase.module.scss'
import Image from 'next/image'
import GameLog from '../pages/Logs.js'
import useUser from '../lib/useUser';
import { useState, useEffect } from "react";
import one from '/public/img/avatars/mask_avatars_one.png'
import two from '/public/img/avatars/mask_avatars_two.png'
import three from '/public/img/avatars/mask_avatars_three.png'
import four from '/public/img/avatars/mask_avatars_four.png'
import five from '/public/img/avatars/mask_avatars_five.png'
import six from '/public/img/avatars/mask_avatars_six.png'

function importAll(r) 
{
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
}

const missingAvatars = importAll(require.context('../public/img/avatars', false, /\.(png|jpe?g|svg)$/));

const ProfileShowcase = () => {
    
    const {user, mutateUser} = useUser();
    const [photos, setPhotos] = useState([''])


    const profileLoop = (res) => {

        var keys = Object.keys(missingAvatars);
        let maskImage = missingAvatars[keys[ keys.length * Math.random() << 0]];
        setPhotos(<Image src={maskImage.default.src} alt='card pix' width='200' height='200'></Image>)
        console.log(maskImage)
        return; 
    }

    return (
        <>
          
          <div className={styles.top_container}>

                <div className={styles.img_wrap}>
                    {photos}
                    <button className={styles.btn_update} onClick={profileLoop} >change avatar</button>
                </div>

                <div className={styles.display_info}>

                    <div className={styles.data_card}>
                    <h1>username</h1>
                    <h2>{user.name}</h2>
                    </div>

                    <div className={styles.data_card}>
                        <h1>games played</h1>
                        <h2>2000</h2>
                    </div>

                    <div className={styles.data_card}>
                        <h1>member since</h1>
                        <h2>{user.since}</h2>
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

          {/* <div className={styles.bottom_container}>
            <GameLog />
          </div> */}

          
          
        </>
    )
}

export default ProfileShowcase
