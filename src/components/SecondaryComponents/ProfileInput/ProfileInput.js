import './ProfileInput.css';
function ProfileInput(props) {
  return (
    <div className='profileInput'>
      <p className='profileInput__text'>{props.placeholderName}</p>
      <input
        type={props.type}
        className='profileInput__input'
        name={props.name}
        defaultValue={props.text}
      />
    </div>
  );
}

export default ProfileInput;
