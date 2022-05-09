import './Portfolio.css';
function Portfolio() {
  return (
    <div className='portfolio'>
      <div className='portfolio__container'>
        <h3 className='portfolio__title'>Портфолио</h3>
        <ul className='portfolio__list'>
          <li>
            <a
              href='https://github.com/iEasyJet/first-project'
              target='_blank'
              rel='noopener noreferrer'
              className='portfolio__link'
            >
              Статичный сайт
            </a>
          </li>
          <span className='portfolio__line'></span>
          <li>
            <a
              href='https://github.com/iEasyJet/russian-travel'
              target='_blank'
              rel='noopener noreferrer'
              className='portfolio__link'
            >
              Адаптивный сайт
            </a>
          </li>
          <span className='portfolio__line'></span>
          <li>
            <a
              href='https://github.com/iEasyJet/mesto'
              target='_blank'
              rel='noopener noreferrer'
              className='portfolio__link'
            >
              Одностраничное приложение
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Portfolio;
