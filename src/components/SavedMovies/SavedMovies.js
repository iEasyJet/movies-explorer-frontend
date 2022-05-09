import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import MainHeader from '../MainHeader/MainHeader';
import Footer from '../Footer/Footer';
import film from '../../images/Movie/benx.png';

const mass = [
  {
    id: '1',
    title: 'В погоне за Бенкси',
    duration: '27 минут',
    film: film,
    className: 'movie__button_delete',
    text: '',
  },
  {
    id: '2',
    title: 'В погоне за Бенкси',
    duration: '27 минут',
    film: film,
    className: 'movie__button_delete',
    text: '',
  },
  {
    id: '3',
    title: 'В погоне за Бенкси',
    duration: '27 минут',
    film: film,
    className: 'movie__button_delete',
    text: '',
  },
  {
    id: '4',
    title: 'В погоне за Бенкси',
    duration: '27 минут',
    film: film,
    className: 'movie__button_delete',
    text: '',
  },
  {
    id: '5',
    title: 'В погоне за Бенкси',
    duration: '27 минут',
    film: film,
    className: 'movie__button_delete',
    text: '',
  },
  {
    id: '6',
    title: 'В погоне за Бенкси',
    duration: '27 минут',
    film: film,
    className: 'movie__button_delete',
    text: '',
  },
  {
    id: '7',
    title: 'В погоне за Бенкси',
    duration: '27 минут',
    film: film,
    className: 'movie__button_delete',
    text: '',
  },
  {
    id: '8',
    title: 'В погоне за Бенкси',
    duration: '27 минут',
    film: film,
    className: 'movie__button_delete',
    text: '',
  },
  {
    id: '9',
    title: 'В погоне за Бенкси',
    duration: '27 минут',
    film: film,
    className: 'movie__button_delete',
    text: '',
  },
];

function SavedMovies() {
  return (
    <>
      <MainHeader />
      <SearchForm />
      <MoviesCardList mass={mass} />
      <Footer />
    </>
  );
}

export default SavedMovies;
