import './ErrorWindow.css';
import fail from '../../images/ErrorWindow/fail.svg';

function ErrorWindow() {
  return (
    <article className='error'>
      <div className='error__box'>
        <img src={fail} alt='Ошибка' className='error__img' />
        <button type='button' className='error__close'></button>
        <p className='error__text'>Ошибка 404</p>
      </div>
    </article>
  );
}

export default ErrorWindow;
