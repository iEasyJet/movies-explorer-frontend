import './ProfileInput.css';
function ProfileInput(props) {
  return (
    <div className='profileInput'>
      <p className='profileInput__text'>{props.placeholderName}</p>
      <input
        type={props.type}
        className='profileInput__input'
        name={props.name}
        required
        value={props.text}
        ref={props.refName}
        onChange={props.onChange}
        minLength={props.minLen}
        maxLength={props.maxLen}
        pattern={props.namePattern}
      />
    </div>
  );
}

export default ProfileInput;
