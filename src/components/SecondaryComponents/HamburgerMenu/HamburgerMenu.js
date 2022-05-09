import './HamburgerMenu.css';
import { NavLink } from 'react-router-dom';
import logoAcc from '../../../images/Header/header.svg';

function HamburgerMenu() {
  return (
    <div className='hamburger-menu'>
      <input id='menu__toggle' type='checkbox' />
      <label className='menu__btn' htmlFor='menu__toggle'>
        <span></span>
      </label>
      <div className='menu__shadow'></div>
      <ul className='menu__box'>
        <div className='menu__wrapper'>
          <NavLink
            exact
            to='/'
            className='menu__new-item'
            activeClassName='menu__item_active'
          >
            <div className='menu__underline'>Главная</div>
          </NavLink>
          <NavLink
            exact
            to='/movies'
            className='menu__new-item'
            activeClassName='menu__item_active'
          >
            <span className='menu__underline'>Фильмы</span>
          </NavLink>
          <NavLink
            exact
            to='/saved-movies'
            className='menu__new-item'
            activeClassName='menu__item_active'
          >
            <span className='menu__underline'>Сохранённые фильмы</span>
          </NavLink>
        </div>
        <button className='menu__acc'>
          <img src={logoAcc} alt='Аккаунт' className='menu__logo' />
          Аккаунт
        </button>
      </ul>
    </div>
  );
}

export default HamburgerMenu;
