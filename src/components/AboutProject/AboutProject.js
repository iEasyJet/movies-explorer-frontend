import './AboutProject.css';import {
  AboutProjectTitle,
  FiveStages,
  AboutProjectText,
  DeadlineWork,
  DeadlineDescription,
  OneWeek,
  BackEnd,
  FourWeek,
  FrontEnd,
} from '../../utils/constants';

function AboutProject() {
  return (
    <div className='work' id='aboutProject'>
      <div className='work__container'>
        <h2 className='work__title'>{AboutProjectTitle}</h2>
        <span className='work__line'></span>

        <div className='work__stages'>
          <div className='work__components'>
            <h3 className='work__subtitle'>{FiveStages}</h3>
            <p className='work__text'>{AboutProjectText}</p>
          </div>
          <div className='work__components'>
            <h3 className='work__subtitle'>{DeadlineWork}</h3>
            <p className='work__text'>{DeadlineDescription}</p>
          </div>
        </div>

        <div className='work__deadline'>
          <div className='work__back'>
            <h4 className='work__week'>{OneWeek}</h4>
            <p className='work__subhead'>{BackEnd}</p>
          </div>
          <div className='work__front'>
            <h4 className='work__weeks'>{FourWeek}</h4>
            <p className='work__subhead'>{FrontEnd}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutProject;
