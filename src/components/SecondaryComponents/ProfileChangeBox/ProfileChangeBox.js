import ProfileInput from '../ProfileInput/ProfileInput';
import CurrentUserContext from '../../../context/CurrentUserContext';
import React, { useState } from 'react';
import { ChangeUserDataText, DataMatchError } from '../../../utils/constants';

function ProfileChangeBox(props) {
  /* Подписка на контекст */
  const currentUser = React.useContext(CurrentUserContext);

  /* Валидация */
  const [isValid1, setValidity1] = useState(true);
  const [error1, setError1] = useState('');

  const [isValid2, setValidity2] = useState(false);
  const [error2, setError2] = useState('');

  const handleInput1Change = () => {
    const input = props.nameRef.current;
    setValidity1(input.validity.valid);
    props.validName(input.validity.valid);

    if (!isValid1) {
      setError1(input.validationMessage);
    } else {
      setError1('');
    }

    if(currentUser.user.name === props.nameRef.current.value) {
      setError1(DataMatchError);
      props.validName(false)
    } else {
      setError1('');
    }
  };

  const handleInput2Change = () => {
    const input = props.emailRef.current;
    setValidity2(input.validity.valid);
    props.validEmail(input.validity.valid);
    if (!isValid2) {
      setError2(input.validationMessage);
    } else {
      setError2('');
    }
    if(currentUser.user.email === props.emailRef.current.value) {
      setError2(DataMatchError);
      props.validName(false)
    } else {
      setError2('');
    }
  };
  /*  */
  return (
    <>
      <h1 className='profile__title'>{ChangeUserDataText}</h1>
      <form className='profile__form profile__form_mod'>
        <span className='profile_error'>{error1}</span>
        <ProfileInput
          placeholderName='Имя'
          type='text'
          name='name'
          text={props.name}
          refName={props.nameRef}
          onChange={handleInput1Change}
          minLen='2'
          maxLen='30'
          namePattern='^[a-zA-ZА-Яа-яЁё\s]+$'
        />
        <span className='profile__line profile__line_mod'></span>
        <ProfileInput
          placeholderName='E-mail'
          type='email'
          name='email'
          text={props.email}
          refName={props.emailRef}
          onChange={handleInput2Change}
          minLen=''
          maxLen=''
          namePattern="^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$"
        />
        <span className='profile_error'>{error2}</span>
      </form>
    </>
  );
}

export default ProfileChangeBox;
