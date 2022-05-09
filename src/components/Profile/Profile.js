import './Profile.css';
import ProfileInput from '../SecondaryComponents/ProfileInput/ProfileInput';
import MainHeader from '../MainHeader/MainHeader';
import { useHistory } from 'react-router-dom';
function Profile() {
  const history = useHistory();
  function logout() {
    history.push('/sign-up');
  }
  return (
    <>
      <MainHeader />
      <div className='profile'>
        <div className='profile__container'>
          <h1 className='profile__title'>Привет, Виталий!</h1>
          <form className='profile__form'>
            <ProfileInput
              placeholderName='Имя'
              type='text'
              name='name'
              text='Виталий'
            />
            <span className='profile__line'></span>
            <ProfileInput
              placeholderName='E-mail'
              type='email'
              name='email'
              text='pochta@mail.ru'
            />
          </form>
          <div className='profile__buttons'>
            <button type='button' className='profile__edit-button'>
              Редактировать
            </button>
            <button
              type='button'
              className='profile__logout-button'
              onClick={logout}
            >
              Выйти из аккаунта
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
