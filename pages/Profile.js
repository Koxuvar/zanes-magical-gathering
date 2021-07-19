import Nav from '../components/Nav'
import Footer from '../components/Footer'
import Showcase from '../components/ProfileShowcase'
import GameLog from './Logs.js'
import Register from './Register';

const Profile = () => {

    return (
        <>
            <Nav />
            <Showcase />
            <GameLog />
            {/* <Footer /> */}
        </>
    )
}

export default Profile
