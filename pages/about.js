import styles from '../styles/SignIn.module.scss'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import MagicBanner from '../components/MagicBanner'
import Image from 'next/image'
import Banner from '../public/img/magicbanner3.jpg'

const About = () => {
    return (
          
        <div>
            <Nav />
            <MagicBanner />

            <Footer />
        </div>
    )
}

export default About