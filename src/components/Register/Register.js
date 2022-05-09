import './Register.css';
import logo from '../../images/Login/logo.svg';
import Input from '../SecondaryComponents/Input/Input';
import FormButton from '../SecondaryComponents/FormButton/FormButton';
import { useHistory } from 'react-router-dom';

function Register() {
  const history = useHistory();
  function goToLogin() {
    history.push('sign-in');
  }
  return (
    <div className='register'>
      <div className='register__container'>
        <img src={logo} alt='Логотип' className='register__logo' />
        <h1 className='register__title'>Добро пожаловать!</h1>

        <form className='form'>
          <Input placeholder='Имя' type='text' name='nameUser' />
          <Input placeholder='E-mail' type='email' name='email' />
          <Input placeholder='Пароль' type='password' name='password' />

          <FormButton name='Зарегистрироваться' />
        </form>

        <button className='register__redirect' onClick={goToLogin}>
          Уже зарегистрированы?
          <span className='register__redirect_blue_text'> Войти</span>
        </button>
      </div>
    </div>
  );
}

export default Register;
