import './AboutMe.css';
import foto from '../../images/AboutMe/foto.jpg';
function AboutMe() {
  return (
    <div className='about-me' id='student'>
      <div className='about-me__container'>
        <h2 className='about-me__title'>Студент</h2>
        <span className='about-me__line'></span>
        <div className='about-me__box'>
          <div className='about-me__info'>
            <h3 className='about-me__name'>Роман</h3>
            <p className='about-me__job'>Фронтенд-разработчик, 25 лет</p>
            <p className='about-me__text'>
              Я родился в Якутске и живу в Ростове-на-Дону, закончил ДГТУ,
              факультет "Технология транспортных процессов", профиль
              "Организация перевозок и дорожного движения". У меня есть жена и
              дочь. Я люблю слушать музыку, а ещё увлекаюсь велосипедом. Недавно
              начал кодить. С июля 2021 года прохожу обучение в
              Яндекс.Практикум.
            </p>
            <a
              href='https://github.com/iEasyJet?tab=repositories'
              target='_blank'
              rel='noopener noreferrer'
              className='about-me__link'
            >
              GitHub
            </a>
          </div>
          <img src={foto} alt='Фотография' className='about-me__img' />
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
