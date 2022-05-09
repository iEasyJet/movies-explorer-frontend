import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import MainHeader from '../MainHeader/MainHeader';
import Footer from '../Footer/Footer';
import More from '../SecondaryComponents/More/More';
import film from '../../images/Movie/benx.png';

const mass = [
  {
    id: '11',
    title: 'В погоне за Бенкси',
    duration: '27 минут',
    film: film,
    className: 'movie__button_saved',
    text: '',
  },
  {
    id: '12',
    title: 'В погоне за Бенкси',
    duration: '27 минут',
    film: film,
    className: 'movie__button_saved',
    text: '',
  },
  {
    id: '13',
    title: 'В погоне за Бенкси',
    duration: '27 минут',
    film: film,
    className: 'movie__button',
    text: 'Сохранить',
  },
  {
    id: '14',
    title: 'В погоне за Бенкси',
    duration: '27 минут',
    film: film,
    className: 'movie__button',
    text: 'Сохранить',
  },
  {
    id: '15',
    title: 'В погоне за Бенкси',
    duration: '27 минут',
    film: film,
    className: 'movie__button',
    text: 'Сохранить',
  },
  {
    id: '16',
    title: 'В погоне за Бенкси',
    duration: '27 минут',
    film: film,
    className: 'movie__button',
    text: 'Сохранить',
  },
  {
    id: '17',
    title: 'В погоне за Бенкси',
    duration: '27 минут',
    film: film,
    className: 'movie__button_saved',
    text: '',
  },
  {
    id: '18',
    title: 'В погоне за Бенкси',
    duration: '27 минут',
    film: film,
    className: 'movie__button',
    text: 'Сохранить',
  },

];
function Movies() {
  return (
    <>
      <MainHeader />
      <SearchForm />
      <MoviesCardList mass={mass} />
      <More />
      <Footer />
    </>
  );
}

export default Movies;
