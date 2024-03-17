
import '../css/HeaderComponent.css';
import { Link } from 'react-router-dom';
import * as Images from './image';
import { useLocation } from 'react-router-dom';

function checkCookies() {
  return document.cookie !== 'undefined' && document.cookie !== '';
}

function HeaderComponent() {
    const location = useLocation();
    let headerContent;
    if (location.pathname === '/') {
      headerContent = (
        <>
          <li className='nav__item'><a href='#about-game'>Что это?</a></li>
          <li className='nav__item'><a href='#beta'>Бета</a></li>
        </>
      );
    } else {
      headerContent = '';
    }

    let Account = checkCookies() ? 
    <li className='nav__item'><Link to={'private_office'}><img src={Images.Person} alt='' width='90px' /></Link></li> 
    : 
    <li className='nav__item sign_or_log_in'>
    <Link to={'/log_in'}>Log in</Link>
    <span style={{color: 'white'}}>/</span>
    <Link to={'/sign_up'}>Sign up</Link>
</li>;
  
    return (
        <>
            <header className='header'>
                <div className='container'>
                    <nav className='nav'>
                        <ul className='nav__list'>
                            <li className='nav__item'><Link to={'/'}><img src={Images.Logo} alt='' width='100px' /></Link></li>
                            {headerContent}
                            {Account}
                        </ul>
                    </nav>
                </div>
            </header>
            
        </>
    );
}

export default HeaderComponent; // Move the closing curly brace to the top level of the file
