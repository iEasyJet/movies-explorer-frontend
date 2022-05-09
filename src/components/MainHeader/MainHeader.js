import './MainHeader.css';
import { NavLink } from 'react-router-dom';
import logo from '../../images/Login/logo.svg';
import headerLogo from '../../images/Header/header.svg';
import HamburgerMenu from '../SecondaryComponents/HamburgerMenu/HamburgerMenu';
import { useHistory } from 'react-router-dom';

function MainHeader() {
  const history = useHistory();
  function goToProfile() {
    history.push('/profile');
  }
  function goToHome() {
    history.push('/');
  }
  return (
    <header className='header'>
      <div className='header__container'>
        <img
          src={logo}
          alt='Логотип'
          className='header__logo'
          onClick={goToHome}
        />
        <nav className='menu'>
          <NavLink
            to='/movies'
            className='menu__item'
            activeClassName='menu__item_active'
          >
            Фильмы
          </NavLink>
          <NavLink
            to='/saved-movies'
            className='menu__item'
            activeClassName='menu__item_active'
          >
            Сохранённые фильмы
          </NavLink>
        </nav>
        <button className='header__button' onClick={goToProfile}>
          <img src={headerLogo} alt='Аккаунт' className='header__acc' />
          Аккаунт
        </button>
      </div>
      <HamburgerMenu />
    </header>
  );
}

export default MainHeader;
