import '../css/HeaderComponent.css';
import { Link } from 'react-router-dom';
import { Person, Logo } from './image';
import { useLocation } from 'react-router-dom';
import Cookies from 'js-cookie';
import { useEffect, useState } from 'react';

const { REACT_APP_APIURL } = process.env;

async function checkCookies() {
  try {
    const response = await fetch(`${REACT_APP_APIURL}/api/account/status`, {
      method: 'GET',
      headers: { 'token': `${Cookies.get('token')}` }
    });
    const data = await response.json();

    if (data.message === 'Logged in') {
      return [
        <li className='nav__item naw__item-account' key='account-link'>
          <Link to={'private_office'}><img src={Person} alt='' width='70px' /></Link>
        </li>
      ];
    } else {
      return [
        <li className='nav__item sign_or_log_in' key='login-signup-link'>
          <Link to={'/log_in'}>Log in</Link>
          <span style={{ color: 'white' }}>/</span>
          <Link to={'/sign_up'}>Sign up</Link>
        </li>
      ];
    }
  } catch (error) {
    console.error(error);
    return false;
  }
}

async function getAccount() {
  const account = await checkCookies();
  return account;
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

  const [account, setAccount] = useState([]);

  useEffect(() => {
    async function fetchAccount() {
      const accountData = await getAccount();
      setAccount(accountData);
    }
    fetchAccount();
  }, []);

  return (
    <>
      <header className='header'>
        <div className='container'>
          <nav className='nav'>
            <ul className='nav__list'>
              <li className='nav__item'><Link to={'/'}><img src={Logo} alt='' width='100px' /></Link></li>
              {headerContent}
              {Array.isArray(account) ? account : null}
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}

export default HeaderComponent;
