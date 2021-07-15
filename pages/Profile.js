import Nav from '../components/Nav'
import Footer from '../components/Footer'
import Showcase from '../components/ProfileShowcase'
import { useAppContext } from './state';
import Register from './Register';

const Profile = () => {
    const gContext = useAppContext();

    console.log(gContext);
    return (
        <>
            <Nav />
            <Showcase />
            
            {/* <Footer /> */}
        </>
    )
}

export default Profile
