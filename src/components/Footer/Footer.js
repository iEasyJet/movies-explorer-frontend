import './Footer.css';
import FooterList from '../SecondaryComponents/FooterList/FooterList';

function Footer() {
  return (
    <footer className='footer'>
      <div className='footer__container'>
        <p className='footer__text'>
          Учебный проект Яндекс.Практикум х BeatFilm.
        </p>
        <div className='footer__underline'></div>
        <div className='footer__subcontainer'>
          <p className='footer__year'>© {new Date().getFullYear()}</p>
          <FooterList />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
