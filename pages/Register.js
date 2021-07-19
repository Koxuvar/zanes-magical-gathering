import Nav from '../components/Nav'
import Footer from '../components/Footer'
import styles from '../styles/Register.module.scss'

import {useState} from 'react';
import useUser from '../lib/useUser';
import fetchJson from '../lib/fetchJson';

const Register = () => {

    const {mutateUser} = useUser({
        redirectTo:'/Profile',
        redirectIfFound: true,
    });

    const [errorMsg, setErrorMsg] = useState('');

    const handleSubmit = async (e) =>
    {
        e.preventDefault();

        if(e.currentTarget.userPassword.value == e.currentTarget.userPasswordCheck.value)
        {

            const body = {
                userName: e.currentTarget.userName.value,
                userPassword: e.currentTarget.userPassword.value,
            }

            try{
                mutateUser(
                    await fetchJson('/api/register', {
                        method:'POST',
                        headers: {'Content-Type': 'application/json'},
                        body: JSON.stringify(body),
                    })
                ).then((res) =>
                    {
                        return res.json();
                    })
                    .then(data =>
                        {
                            console.log(data);
                        })
            }
            catch(err)
            {
                console.error('An unexpected error happened:', err);
                setErrorMsg(err.data.message);
            }
        }
        else
        {
            setErrorMsg('Passwords dont match. Please try again!');
        }
    }
    return (
        <>
            <Nav />
                <div className={styles.container}>

                    <form className={styles.register_wrap} onSubmit={handleSubmit}>
                        <h1>welcome!</h1>
                        <input name='userName' placeholder='username'></input>
                        <input name='userPassword' placeholder='password'></input>
                        <input name='userPasswordCheck' placeholder='reenter password'></input>
                        { errorMsg && <h4>{errorMsg}</h4>}
                        <button type='submit'>Register</button>
                    </form>
                </div>
            <Footer />
        </>
    )
}

export default Register
