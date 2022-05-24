import './Portfolio.css';
import { PortfolioText, StaticSite, FlexSite, Appendix } from '../../utils/constants';

function Portfolio() {
  return (
    <div className='portfolio'>
      <div className='portfolio__container'>
        <h3 className='portfolio__title'>{PortfolioText}</h3>
        <ul className='portfolio__list'>
          <li>
            <a
              href='https://github.com/iEasyJet/first-project'
              target='_blank'
              rel='noopener noreferrer'
              className='portfolio__link'
            >
              {StaticSite}
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
              {FlexSite}
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
              {Appendix}
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Portfolio;
