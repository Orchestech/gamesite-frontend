
import '../css/HeaderComponent.css';
import { Link } from 'react-router-dom';
import ImgTime from '../img/лого.svg';

function HeaderComponent() {
    return (
        <>
            <header className='header'>
                <div className='container'>
                    <nav className='nav'>
                        <ul className='nav__list'>
                            <li className='nav__item'><Link to={'/'}><img src={ImgTime} alt='' width='100px' /></Link></li>
                            <li className='nav__item'><a href='#about-game'>What is it?</a></li>
                            <li className='nav__item'><a href='#beta'>Beta</a></li>
                            <li className='nav__item sign_or_log_in'>
                                <Link to={'/log_in'}>Log in</Link>
                                <span style={{color: 'white'}}>/</span>
                                <Link to={'/sign_up'}>Sign up</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
            
        </>
    );
}

export default HeaderComponent;