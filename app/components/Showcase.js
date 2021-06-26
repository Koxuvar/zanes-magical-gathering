import style from '../styles/Showcase.module.scss'
import Image from 'next/image'


const Showcase = () => {
    return (
        <>
            <div className={style.container}>
                <h1>Learning magic made easy</h1>
                <h2>a card search and deck builder for the Standard format</h2>

                <input className={style.search} type='text' placeholder='search for cards here...'></input>

            </div>
            <div>
                <h2 className={style.text_hold}>below are the current legal standard sets</h2>
                
            </div>
        </>
    )
}

export default Showcase
