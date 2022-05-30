import './Profile.css';
import MainHeader from '../MainHeader/MainHeader';
import CurrentUserContext from '../../context/CurrentUserContext';
import React, { useState, useRef } from 'react';
import ProfileChangeBox from '../SecondaryComponents/ProfileChangeBox/ProfileChangeBox';
import ProfileBox from '../SecondaryComponents/ProfileBox/ProfileBox';
import FormButton from '../SecondaryComponents/FormButton/FormButton';
import { CancelChanges, Edit, LogOut } from '../../utils/constants';

function Profile(props) {
  /* Подписка на контекст */
  const currentUser = React.useContext(CurrentUserContext);

  /* Стейт на смену кнопки для редактирования */
  const [changeButon, setChangeButton] = useState(false);

  /* Стейты  на валидность */
  const [isValidName, setValidityName] = useState(false);
  const [isValidEmail, setValidityEmail] = useState(true);

  /* Рефы */
  const nameRef = useRef();
  const emailRef = useRef();

  /* Смена кнопки */
  function changeButton() {
    setChangeButton(true);
  }

  /* Смена данных */
  function isSubmit(e) {
    e.preventDefault();

    const dataUser = {
      name: nameRef.current.value,
      email: emailRef.current.value,
    };
    props.changeUserData(dataUser);
    setChangeButton(false);
  }
  return (
    <>
      <MainHeader />
      <div className='profile'>
        <div className='profile__container'>
          {changeButon ? (
            <ProfileChangeBox
              name={currentUser.user.name}
              email={currentUser.user.email}
              nameRef={nameRef}
              emailRef={emailRef}
              validName={setValidityName}
              validEmail={setValidityEmail}
            />
          ) : (
            <ProfileBox
              name={currentUser.user.name}
              email={currentUser.user.email}
            />
          )}
        </div>
        <div className='profile__buttons'>
          {changeButon ? (
            <>
              <FormButton
                name='Сохранить'
                mod='profile_mod'
                onSubmit={isSubmit}
                disabled={!(isValidName && isValidEmail)}
              />
              <button
                type='button'
                className='profile__logout-button'
                onClick={() => {
                  setChangeButton(false);
                }}
              >
                {CancelChanges}
              </button>
            </>
          ) : (
            <>
              <button
                type='button'
                className='profile__edit-button'
                onClick={changeButton}
              >
                {Edit}
              </button>
              <button
                type='button'
                className='profile__logout-button'
                onClick={props.logout}
              >
                {LogOut}
              </button>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default Profile;
