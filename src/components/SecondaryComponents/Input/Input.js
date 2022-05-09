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
        className='form__input'
        name={props.name}
      />
    </>
  );
}

export default Input;
