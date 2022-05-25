import './Login.css';
import logo from '../../images/Login/logo.svg';
import Input from '../SecondaryComponents/Input/Input';
import FormButton from '../SecondaryComponents/FormButton/FormButton';
import { useHistory } from 'react-router-dom';
import { useRef, useState } from 'react';
import { GladToSee, NotRegisteredYet, Registration } from '../../utils/constants';

function Login(props) {
  /* Рефы */
  const emailRef = useRef();
  const passwordRef = useRef();

  /* Стейты для валидации */
  const [value1, setValue1] = useState('');
  const [isValid1, setValidity1] = useState(false);
  const [error1, setError1] = useState('');

  const [value2, setValue2] = useState('');
  const [isValid2, setValidity2] = useState(false);
  const [error2, setError2] = useState('');

  /* Валидация 1-го инупта */
  const handleInput1Change = () => {
    const input = emailRef.current;
    setValue1(input.value);
    setValidity1(input.validity.valid);
    if (!isValid1) {
      setError1(input.validationMessage);
    } else {
      setError1('');
    }
  };

  /* Валидация 2-го инупта */
  const handleInput2Change = () => {
    const input = passwordRef.current;
    setValue2(input.value);
    setValidity2(input.validity.valid);
    if (!isValid2) {
      setError2(input.validationMessage);
    } else {
      setError2('');
    }
  };

  /* История */
  const history = useHistory();

  /* Редирект на регистрацию */
  function goToRegister() {
    history.push('/sign-up');
  }
  /* Редирект на главную */
  function goToProfile() {
    history.push('/');
  }

  /* Сабмит */
  function onSubmit(e) {
    e.preventDefault();
    const userData = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };
    props.submit(userData);
    
  }

  return (
    <div className='login'>
      <div className='login__container'>
        <img src={logo} alt='Логотип' className='login__logo' onClick={goToProfile}/>
        <h1 className='login__title'>{GladToSee}</h1>

        <form className='form' onSubmit={onSubmit}>
          <Input
            placeholder='E-mail'
            type='email'
            name='email'
            refName={emailRef}
            value={value1}
            error={error1}
            handleInput={handleInput1Change}
            minLen=''
            maxLen=''
            namePattern="^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$"
          />
          <Input
            placeholder='Пароль'
            type='password'
            name='password'
            refName={passwordRef}
            value={value2}
            error={error2}
            handleInput={handleInput2Change}
            minLen='8'
            maxLen=''
          />

          <FormButton name='Войти' disabled={!(isValid1 && isValid2)} mod='form__submit_login'/>
        </form>

        <button className='login__redirect' onClick={goToRegister}>
          {NotRegisteredYet}
          <span className='login__redirect_blue_text'>{Registration}</span>
        </button>
      </div>
    </div>
  );
}

export default Login;
