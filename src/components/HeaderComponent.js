
import '../css/HeaderComponent.css';
import { Link } from 'react-router-dom';

function HeaderComponent() {
    return (
        <>
            <header className='header'>
                <div className='container'>
                    <nav className='nav'>
                        <ul className='nav__list'>
                            <li className='nav__item'><Link to={'/'}>Wraith Wrangler</Link></li>
                            <li className='nav__item'><a href='#about-game'>What is it?</a></li>
                            <li className='nav__item'><a href='#beta'>Beta</a></li>
                            <li className='nav__item'><Link to={'/log_in'}>Log in</Link></li>
                        </ul>
                    </nav>
                </div>
            </header>
            
        </>
    );
}

export default HeaderComponent;