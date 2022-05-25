import './NavTab.css';
import { AboutProject, Technology, NavTabStudent } from '../../utils/constants';

function NavTab() {
  return (
    <div className='nav'>
      <nav className='nav__container'>
        <ul className='nav__list'>
          <li>
            <a href='#aboutProject' className='nav__link'>
              {AboutProject}
            </a>
          </li>
          <li>
            <a href='#tech' className='nav__link'>
              {Technology}
            </a>
          </li>
          <li>
            <a href='#student ' className='nav__link'>
              {NavTabStudent}
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default NavTab;
