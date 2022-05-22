import './FormButton.css';

function FormButton(props) {
  return (
    <button
      type='submit'
      className={`form__submit ${
        props.disabled ? 'form__submit_disabled' : ''
      } ${props.mod}`}
      disabled={`${props.disabled ? 'disabled' : ''}`}
      onClick={props.onSubmit}
    >
      {props.name}
    </button>
  );
}

export default FormButton;
