import './PageNotFound.css';
import { useHistory } from 'react-router-dom';

function PageNotFound() {
  const history = useHistory();
  function goToBack() {
    history.goBack()
  }
  return (
    <div className='not-found'>
      <h1 className='not-found__title'>404</h1>
      <p className='not-found__subtitle'>Страница не найдена</p>
      <button className='not-found__button' type='button' onClick={goToBack}>
        Назад
      </button>
    </div>
  );
}

export default PageNotFound;
