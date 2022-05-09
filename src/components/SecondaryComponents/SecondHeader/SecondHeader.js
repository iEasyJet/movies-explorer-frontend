import './SecondHeader.css';
import logo from '../../../images/Login/logo.svg';
import { useHistory } from 'react-router-dom';

function SecondHeader() {
  const history = useHistory();
  function goToRegistr() {
    history.push('/sign-up');
  }
  function goToLogin() {
    history.push('/sign-in');
  }
  function goToHome() {
    history.push('/');
  }
  return (
    <header className='secondHeader'>
      <div className='secondHeader__contaner'>
        <img
          src={logo}
          alt='Логотип'
          className='secondHeader__img'
          onClick={goToHome}
        />
        <div className='secondHeader__buttons'>
          <button
            type='button'
            className='secondHeader__registr'
            onClick={goToRegistr}
          >
            Регистрация
          </button>
          <button
            type='button'
            className='secondHeader__login'
            onClick={goToLogin}
          >
            Войти
          </button>
        </div>
      </div>
    </header>
  );
}

export default SecondHeader;
