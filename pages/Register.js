import Nav from '../components/Nav'
import Footer from '../components/Footer'
import styles from '../styles/Register.module.scss'

const Register = () => {

    return (
        <>
            <Nav />
                <div className={styles.container}>

                    <div className={styles.register_wrap}>
                        <h1>welcome</h1>
                        <input id='userName' placeholder='username'></input>
                        <input id='userPassword' placeholder='password'></input>
                        <input id='userPasswordCheck' placeholder='reenter password'></input>
                        <h4 className={styles.hide}>passwords do not match</h4>
                    </div>
                </div>
            <Footer />
        </>
    )
}

export default Register
