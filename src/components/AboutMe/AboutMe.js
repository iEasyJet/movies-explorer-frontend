import './AboutMe.css';
import foto from '../../images/AboutMe/foto.jpg';
import { Student, Name, Job, About, GitHub } from '../../utils/constants';
function AboutMe() {
  return (
    <div className='about-me' id='student'>
      <div className='about-me__container'>
        <h2 className='about-me__title'>{Student}</h2>
        <span className='about-me__line'></span>
        <div className='about-me__box'>
          <div className='about-me__info'>
            <h3 className='about-me__name'>{Name}</h3>
            <p className='about-me__job'>{Job}</p>
            <p className='about-me__text'>{About}</p>
            <a
              href='https://github.com/iEasyJet?tab=repositories'
              target='_blank'
              rel='noopener noreferrer'
              className='about-me__link'
            >
              {GitHub}
            </a>
          </div>
          <img src={foto} alt='Фотография' className='about-me__img' />
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
