import './Input.css';

function Input(props) {
  return (
    <>
      <div className='form__err-container'>
        <p className='form__placeholder'>{props.placeholder}</p>
        <span className='form_error'>{props.error}</span>
      </div>
      <input
        type={props.type}
        required
        minLength={props.minLen}
        maxLength={props.maxLen}
        className='form__input'
        name={props.name}
        ref={props.refName}
        value={props.value}
        onChange={props.handleInput}
        pattern={props.namePattern}
      />
    </>
  );
}

export default Input;
