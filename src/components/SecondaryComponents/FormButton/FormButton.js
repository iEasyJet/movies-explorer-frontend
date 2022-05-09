import './FormButton.css';
function FormButton(props) {
  return (
    <button type='submit' className='form__submit'>
      {props.name}
    </button>
  );
}

export default FormButton;
