import style from '../styles/Footer.module.scss'

const Footer = () => {
    return (
        <footer className={style.footer}>
            <div className={style.footer__addr}>
                <h1 className={style.footer__logo}>turn one</h1>
            
                <h2>Contact</h2>
        
        
            </div>
  
            <ul className={style.footer__nav}>
                <li className={style.nav__item}>
                
                </li>
                
                <li className={style.nav__item}>
                
                </li>
                
                <li className={style.nav__item}>
                <h2 className={style.nav__title}>Legal</h2>
                
                <ul className="nav__ul">
                    <li>
                    <a href="#">Privacy Policy</a>
                    </li>
                    
                    <li>
                    <a href="#">Terms of Use</a>
                    </li>
                    
                    <li>
                    <a href="#">Sitemap</a>
                    </li>
                </ul>
                </li>
            </ul>
    
            <div className={style.legal}>
                <p>&copy; 2021 blah blah blah. All rights reserved.</p>
                
                <div className={style.legal__links}>
                <span>Powered by <span className="heart">º</span> Scryfall</span>
                </div>
            </div>
        </footer>
    )
}

export default Footer
