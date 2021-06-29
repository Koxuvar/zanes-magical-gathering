import styles from '../styles/SignIn.module.scss'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

const SignIn = () => {
    return (
        <>  
            <Nav />
            <div className={styles.container}>

                <div className={styles.sign_in_wrap}>
                    <h1>welcome back</h1>
                </div>

            </div>
            <Footer />
        </>
    )
}

export default SignIn
