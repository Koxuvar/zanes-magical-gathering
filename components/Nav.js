import Link from 'next/link'
import style from '../styles/Nav.module.scss'

const Nav = () => {
    return (
        <nav className={style.header}>
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
                <li className={style.push}>
                    <Link href='/SignIn'>sign in</Link>
                </li>
                <li>
                    <Link href='/Register'>register</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Nav
