import './ModalWindow.css';
import fail from '../../images/ModalWindow/fail.svg';
import success from '../../images/ModalWindow/success.svg';

function ModalWindow(props) {
  /* Закрытие по оверлею */
  function closeOnOverlay(e) {
    if (e.target === e.currentTarget) {
      props.close();
    }
  }
  return (
    <article
      className={`modal ${props.isOpen ? 'modal_opened' : ''}`}
      onClick={closeOnOverlay}
    >
      <div className='modal__box'>
        <img
          src={props.isOk ? success : fail}
          alt='Ошибка'
          className='modal__img'
        />
        <button
          type='button'
          className='modal__close'
          onClick={props.close}
        ></button>
        <p className='modal__text'>{props.text}</p>
      </div>
    </article>
  );
}

export default ModalWindow;
