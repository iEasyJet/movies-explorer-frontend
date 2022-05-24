import './Techs.css';
import TechsList from '../SecondaryComponents/TechsList/TechsList';
import { Technology, SevenTech, TechText } from '../../utils/constants';

function Techs() {
  return (
    <div className='techs' id='tech'>
      <div className='techs__container'>
        <h2 className='techs__title'>{Technology}</h2>
        <span className='techs__line'></span>
        <h3 className='techs__subtitle'>{SevenTech}</h3>
        <p className='techs__text'>
          {TechText}
        </p>
        <ul className='techs__box'>
          <TechsList />
        </ul>
      </div>
    </div>
  );
}

export default Techs;
