import style from '../styles/Showcase.module.scss'
import Image from 'next/image'


const Showcase = () => {
    return (

        <div className={style.container}>
            <h1>Learning magic made easy</h1>
            <h2>a card search and deck builder for the Standard format</h2>

            <input className={style.search} type='text' placeholder='search for cards here...'></input>

        </div>

    )
}

export default Showcase
