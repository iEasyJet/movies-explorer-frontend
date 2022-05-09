import './Techs.css';
import TechsList from '../SecondaryComponents/TechsList/TechsList';

function Techs() {
  return (
    <div className='techs' id='tech'>
      <div className='techs__container'>
        <h2 className='techs__title'>Технологии</h2>
        <span className='techs__line'></span>
        <h3 className='techs__subtitle'>7 технологий</h3>
        <p className='techs__text'>
          На курсе веб-разработки мы освоили технологии, которые применили в
          дипломном проекте.
        </p>
        <ul className='techs__box'>
          <TechsList />
        </ul>
      </div>
    </div>
  );
}

export default Techs;
