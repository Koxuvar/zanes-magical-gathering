import styles from '../styles/ProfileShowcase.module.scss'
import Image from 'next/image'

{/* dummy data photos below */}
import delta from '../public/img/dummydeck/delta.jpg'
import usea from '../public/img/dummydeck/usea.jpg'
import petal from '../public/img/dummydeck/petal.jpg'

const ProfileShowcase = () => {
    return (
        <>
          <div className={styles.container}>

              {/* lands */}
              <div className={styles.lands}>
                  <h2>lands</h2>
                <div className={styles.img_wrap}>
                    <Image src={delta} />
                </div>
                <div className={styles.img_wrap_layer}>
                    <Image src={delta} />
                </div>
                <div className={styles.img_wrap_layer_two}>
                    <Image src={usea} />
                </div>
              </div>

              {/* 0cmc */}
               <div className={styles.zero}>
                   <h2>zero</h2>
                   <div className={styles.img_wrap_layer_three}>
                       <Image src={petal} />
                   </div>
               </div> 
              {/* 1cmc */}
              {/* 2cmc */}
              {/* 3cmc */}
              {/* 4cmc */}
              {/* 5cmc */}
              {/* 6cmc */}
              {/* 7cmc */}
              {/* 8cmc */}
              
          </div>
        </>
    )
}

export default ProfileShowcase
