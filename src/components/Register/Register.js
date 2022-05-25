import './Register.css';
import logo from '../../images/Login/logo.svg';
import Input from '../SecondaryComponents/Input/Input';
import FormButton from '../SecondaryComponents/FormButton/FormButton';
import { useHistory } from 'react-router-dom';
import { useRef, useState } from 'react';
import { Welcome, AlreadyRegistered, ToComeIn } from '../../utils/constants';

function Register(props) {
  /* Стейты на валидацию */
  const [value1, setValue1] = useState('');
  const [isValid1, setValidity1] = useState(false);
  const [error1, setError1] = useState('');

  const [value2, setValue2] = useState('');
  const [isValid2, setValidity2] = useState(false);
  const [error2, setError2] = useState('');

  const [value3, setValue3] = useState('');
  const [isValid3, setValidity3] = useState(false);
  const [error3, setError3] = useState('');

  /* Валидация 1-го инпута */
  const handleInput1Change = () => {
    const input = nameRef.current;
    setValue1(input.value);
    setValidity1(input.validity.valid);
    if (!isValid1) {
      setError1(input.validationMessage);
    } else {
      setError1('');
    }
  };

  /* Валидация 2-го инпута */
  const handleInput2Change = () => {
    const input = emailRef.current;
    setValue2(input.value);
    setValidity2(input.validity.valid);
    if (!isValid2) {
      setError2(input.validationMessage);
    } else {
      setError2('');
    }
  };

  /* Валидация 3-го инпута */
  const handleInput3Change = () => {
    const input = passwordRef.current;
    setValue3(input.value);
    setValidity3(input.validity.valid);
    if (!isValid3) {
      setError3(input.validationMessage);
    } else {
      setError3('');
    }
  };

  /* Рефы */
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

  /* История */
  const history = useHistory();

  /* Редирект на логин */
  function goToLogin() {
    history.push('/sign-in');
  }
    /* Редирект на профиль */
    function goToProfile() {
      history.push('/');
    }

  /* Регистрация */
  function onSubmit(e) {
    e.preventDefault();
    const userData = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };
    props.submit(userData);
  }

  return (
    <div className='register'>
      <div className='register__container'>
        <img src={logo} alt='Логотип' className='register__logo' onClick={goToProfile}/>
        <h1 className='register__title'>{Welcome}</h1>

        <form className='form' onSubmit={onSubmit}>
          <Input
            placeholder='Имя'
            type='text'
            name='nameUser'
            refName={nameRef}
            value={value1}
            error={error1}
            handleInput={handleInput1Change}
            minLen='2'
            maxLen='30'
            namePattern='^[a-zA-ZА-Яа-яЁё\s]+$'
          />
          <Input
            placeholder='E-mail'
            type='email'
            name='email'
            refName={emailRef}
            value={value2}
            error={error2}
            handleInput={handleInput2Change}
            minLen=''
            maxLen=''
            namePattern="^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$"
          />
          <Input
            placeholder='Пароль'
            type='password'
            name='password'
            refName={passwordRef}
            value={value3}
            error={error3}
            handleInput={handleInput3Change}
            minLen='8'
            maxLen=''
          />

          <FormButton
            name='Зарегистрироваться'
            disabled={!(isValid1 && isValid2 && isValid3)}
          />
        </form>

        <button className='register__redirect' onClick={goToLogin}>
          {AlreadyRegistered}
          <span className='register__redirect_blue_text'>{ToComeIn}</span>
        </button>
      </div>
    </div>
  );
}

export default Register;
