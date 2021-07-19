import styles from '../styles/SignIn.module.scss'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

import {useState} from 'react';
import useUser from '../lib/useUser';
import fetchJson from '../lib/fetchJson';
import Link from 'next/link';

const SignIn = () => {

    const {mutateUser} = useUser({
        redirectTo:'/Profile',
        redirectIfFound:true,
    });

    const [errorMsg, setErrorMsg] = useState('');

    const handleSubmit = async (e) =>
    {
        e.preventDefault();

        const body = {
            userName:e.currentTarget.userName.value,
            userPassword: e.currentTarget.userPassword.value,
        }

        try{
            mutateUser(
                await fetchJson('/api/login', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json'},
                    body: JSON.stringify(body),
                })
            )
        }
        catch(err)
        {
            console.error('An unexpected error happened:', err);
            setErrorMsg(err.data.message);
        }
    }
    return (
        <>  
            <Nav />
            <div className={styles.container}>

                <form className={styles.sign_in_wrap} onSubmit={handleSubmit}>
                    <h1>welcome back!</h1>
                    <input name='userName' placeholder='username'></input>
                    <input name='userPassword' placeholder='password'></input>
                    {errorMsg && <p className="error">{errorMsg}</p>}
                    <button className={styles.btn} type='submit' >sign in</button>
                </form>
            </div>
            
            <div className={styles.register}>
                <h2><Link href='/Register'>need to register?</Link></h2>
            </div>
            
            <Footer />
        </>
    )
}

export default SignIn
