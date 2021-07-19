import Link from 'next/link'
import style from '../styles/Nav.module.scss'
import useUser from '../lib/useUser';
import router from 'next/router';
import fetchJson from '../lib/fetchJson';

const Nav = () => {
    const { user, mutateUser } = useUser();
    return (
        <nav className={style.header}>

            <div className={style.menu_wrap}>
                <input type="checkbox" className={style.toggler}/>
                <div className={style.hamburger}><div></div></div>
                <div className={style.menu}>
                    <div>
                        <div>
                            <ul>
                        
                                <li>
                                    <Link href='/'>home</Link>
                                </li>
                                <li>
                                    <Link href='/about'>about</Link>
                                </li>
                                <li>
                                    <Link href='/Profile'>profile</Link>
                                </li>
                                <li>
                                    <Link href='/Play'>play</Link>
                                </li>
                                {/* <li>
                                    <Link href='/Logs'>game log</Link>
                                </li> */}
                                <li>
                                    <Link href='/SignIn'>sign in</Link>
                                </li>
                                
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {user?.isLoggedIn && 
            <button 
                className={style.logout} 
                href='/api/logout'
                onClick={async (e) =>
                {
                    e.preventDefault();
                    mutateUser(
                        await fetchJson('/api/logout', {method: 'POST'}),
                        false
                    )
                    router.push('/');
                }}>Logout</button>}

            
        </nav>
    )
}

export default Nav
