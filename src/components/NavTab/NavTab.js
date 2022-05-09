import './NavTab.css';

function NavTab() {
  return (
    <div className='nav'>
      <nav className='nav__container'>
        <ul className='nav__list'>
          <li>
            <a href='#aboutProject' className='nav__link'>
              О проекте
            </a>
          </li>
          <li>
            <a href='#tech' className='nav__link'>
              Технологии
            </a>
          </li>
          <li>
            <a href='#student ' className='nav__link'>
              Студент
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default NavTab;
