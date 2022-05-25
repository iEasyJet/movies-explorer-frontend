import './CardButton.css';

function CardButton(props) {
  return (
    <>
      <button
        type='button'
        className={props.class}
        onClick={props.click}
      >{props.text}</button>
    </>
  );
}

export default CardButton;
