import './MainHeader.css';
import { NavLink } from 'react-router-dom';
import logo from '../../images/Login/logo.svg';
import headerLogo from '../../images/Header/header.svg';
import HamburgerMenu from '../SecondaryComponents/HamburgerMenu/HamburgerMenu';
import { useHistory } from 'react-router-dom';
import { Movies, SavedMovies, Account } from '../../utils/constants';

function MainHeader(props) {
  /* История */
  const history = useHistory();

  /* Редирект на профиль */
  function goToProfile() {
    history.push('/profile');
  }

  /* Редирект на главную */
  function goToHome() {
    history.push('/');
  }

  return (
    <header className='header' style={props.background}>
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
            {Movies}
          </NavLink>
          <NavLink
            to='/saved-movies'
            className='menu__item'
            activeClassName='menu__item_active'
          >
            {SavedMovies}
          </NavLink>
        </nav>
        <button className='header__button' onClick={goToProfile}>
          <img src={headerLogo} alt='Аккаунт' className='header__acc' />
          {Account}
        </button>
      </div>
      <HamburgerMenu />
    </header>
  );
}

export default MainHeader;
