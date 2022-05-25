import './Main.css';
import SecondHeader from '../SecondaryComponents/SecondHeader/SecondHeader';
import Promo from '../Promo/Promo';
import NavTab from '../NavTab/NavTab';
import AboutProject from '../AboutProject/AboutProject';
import Techs from '../Techs/Techs';
import AboutMe from '../AboutMe/AboutMe';
import Portfolio from '../Portfolio/Portfolio';
import Footer from '../Footer/Footer';
import MainHeader from '../MainHeader/MainHeader';

function Main(props) {
  const background = {
    background: '#DDDEE3',
  };
  return (
    <>
      {props.loggedIn ? (
        <MainHeader background={background} />
      ) : (
        <SecondHeader />
      )}
      <Promo />
      <NavTab />
      <AboutProject />
      <Techs />
      <AboutMe />
      <Portfolio />
      <Footer />
    </>
  );
}

export default Main;
