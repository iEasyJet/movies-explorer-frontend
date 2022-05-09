import './Login.css';
import logo from '../../images/Login/logo.svg';
import Input from '../SecondaryComponents/Input/Input';
import FormButton from '../SecondaryComponents/FormButton/FormButton';
import { useHistory } from 'react-router-dom';

function Login() {
  const history = useHistory();
  function goToRegister() {
    history.push('/sign-up');
  }
  return (
    <div className='login'>
      <div className='login__container'>
        <img src={logo} alt='Логотип' className='login__logo' />
        <h1 className='login__title'>Рады видеть!</h1>

        <form className='form'>
          <Input placeholder='E-mail' type='email' name='email' />
          <Input placeholder='Пароль' type='password' name='password' />

          <FormButton name='Войти' />
        </form>

        <button className='login__redirect' onClick={goToRegister}>
          Ещё не зарегистрированы?
          <span className='login__redirect_blue_text'> Регистрация</span>
        </button>
      </div>
    </div>
  );
}

export default Login;
