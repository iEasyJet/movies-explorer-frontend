import './PageNotFound.css';
import { useHistory } from 'react-router-dom';
import { CodeError, PageNotFoundText, Back } from '../../utils/constants';

function PageNotFound() {
  const history = useHistory();
  function goToBack() {
    history.goBack()
  }
  return (
    <div className='not-found'>
      <h1 className='not-found__title'>{CodeError}</h1>
      <p className='not-found__subtitle'>{PageNotFoundText}</p>
      <button className='not-found__button' type='button' onClick={goToBack}>
        {Back}
      </button>
    </div>
  );
}

export default PageNotFound;
