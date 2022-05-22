function ProfileBox(props) {
  return (
    <>
      <h1 className='profile__title'>Привет, {props.name}!</h1>
      <div className='profile__form'>
        <div className='profileInput'>
          <p className='profileInput__text'>Имя</p>
          <div className='profileInput__input'>{props.name}</div>
        </div>
        <span className='profile__line'></span>
        <div className='profileInput'>
          <p className='profileInput__text'>E-mail</p>
          <div className='profileInput__input'>{props.email}</div>
        </div>
      </div>
    </>
  );
}

export default ProfileBox;
