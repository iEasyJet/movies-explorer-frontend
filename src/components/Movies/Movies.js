import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import MoviesCard from '../MoviesCard/MoviesCard';
import MainHeader from '../MainHeader/MainHeader';
import Footer from '../Footer/Footer';
import More from '../SecondaryComponents/More/More';
import React, { useRef, useState, useEffect } from 'react';
import CurrentUserContext from '../../context/CurrentUserContext';
import moviesApi from '../../utils/MoviesApi';
import mainApi from '../../utils/MainApi';
import search from '../../utils/Search';
import wordDeclension from '../../utils/WordDeclension';
import Preloader from '../Preloader/Preloader';
import isWindowListener from '../../utils/WindowListener'

function Movies(props) {
  /* Подписка на контекст */
  const currentUser = React.useContext(CurrentUserContext);

  /* Рефы */
  const searchRef = useRef();
  const isChecked = useRef();

  /* Загрузочное колесо */
  const [isLoading, setIsLoading] = useState(false);

  /* Стейты на фильмы */
  const [movies, setMovies] = useState([]);
  const [savedMovies, setSavedMovies] = useState([]);
  const [searchMovies, setSecrhMovies] = useState(
    JSON.parse(localStorage.getItem('movies')) || []
  );

  /* Стейт на найденные фильмы */
  const [searchValue, setSearchValue] = useState(
    localStorage.getItem('search') || ''
  );

  /* Стейты на кнопку еще */
  const [showMore, setShowMore] = useState(12);
  const [plusNumber, setPlusNumber] = useState(3);

  /* Стейт на ширину окна */
  const [width, setWidth] = useState(window.screen.availWidth);

  /* Стейт на чекбокс */
  const [checkbox, setCheckbox] = useState(localStorage.getItem('checked1') || false);

  /* Добавление еще фильмов */
  function handleClickMore() {
    setShowMore(showMore + plusNumber);
  }


  /* Отслеживание ширины экрана для кол-ва карточек */
  useEffect(() => {
    isWindowListener(width, setWidth, setShowMore, setPlusNumber)
  }, [width]);


  /* Получение всех фильмов */
  useEffect(() => {
    moviesApi
      .getMovies()
      .then((res) => {
        setMovies(res);
      })
      .catch(() => {

        props.setOpenModalWindow(true);
        props.setIsOk(false);
        props.setText(
          'Во время запроса произошла ошибка.' +
            'Возможно, проблема с соединением или сервер недоступен.' +
            'Перезагрузите страницу!'
        );
      });
  }, [props]);

  /* Получение сохраненных фильмов */
  useEffect(() => {
    const token = localStorage.getItem('jwt');
    mainApi
      .getSavedMovies(token)
      .then((res) => {
        const result = res.movies.filter(
          (i) => i.owner === currentUser.user._id
        );
        setSavedMovies(result);
      })
      .catch(() => {
        props.setOpenModalWindow(true);
        props.setIsOk(false);
        props.setText(
          'Во время запроса произошла ошибка.' +
            'Возможно, проблема с соединением или сервер недоступен.' +
            'Перезагрузите страницу!'
        );
      });
  }, [props, currentUser]);

  /* Поиск нужного фильма */
  function onSubmit(e) {
    localStorage.removeItem('checked1');
    localStorage.removeItem('search');

    e.preventDefault();

    setIsLoading(true);

    const input = searchRef.current.value;
    const isShortFilm = isChecked.current.checked;

    localStorage.setItem('checked1', isShortFilm);
    localStorage.setItem('search', input);
    setSearchValue(input);
    setCheckbox(localStorage.getItem('checked1'));

    if (!input) {
      props.setOpenModalWindow(true);
      props.setIsOk(false);
      props.setText('Заполните поле поиска!');
      setIsLoading(false);
    } else {
      const result = search(movies, input, isShortFilm);
      if (result.length === 0) {
        props.setOpenModalWindow(true);
        props.setIsOk(false);
        props.setText('По вашему запросу ничего не найдено!');
        setIsLoading(false);
      } else {
        localStorage.setItem('movies', JSON.stringify(result));
        setSecrhMovies(JSON.parse(localStorage.getItem('movies')));
        setIsLoading(false);
      }
    }
  }

  /* Сохранение фильма */
  function saveMovie(movie) {
    const data = {
      country: movie.country,
      director: movie.director,
      duration: movie.duration,
      year: movie.year,
      description: movie.description,
      image: `https://api.nomoreparties.co${movie.image.url}`,
      trailerLink: movie.trailerLink,
      nameRU: movie.nameRU,
      nameEN: movie.nameEN,
      movieId: movie.id,
    };

    const token = localStorage.getItem('jwt');

    mainApi
      .createMovie(data, token)
      .then((res) => {
        setSavedMovies([res.movie, ...savedMovies]);
      })
      .catch((err) => {
        props.setOpenModalWindow(true);
        props.setIsOk(false);
        props.setText(
          'Во время запроса произошла ошибка.' +
            'Возможно, проблема с соединением или сервер недоступен.'
        );
      });
  }

  return (
    <>
      <MainHeader />
      <SearchForm
        searchRef={searchRef}
        onSubmit={onSubmit}
        isChecked={isChecked}
        checked={checkbox}
        searchValue={searchValue}
      />
      <MoviesCardList
        children={
          isLoading ? (
            <Preloader />
          ) : searchMovies.length === 0 ? (
            <div className='cardList__nothing'>
              Тут пока ничего нет
            </div>
          ) : (
            searchMovies.slice(0, showMore).map((card) => {
              const minute = wordDeclension(card.duration);
              const isSaved = savedMovies.some((i) => i.movieId === card.id);

              return (
                <MoviesCard
                  key={card.id}
                  card={card}
                  title={card.nameRU}
                  duration={`${card.duration} ${minute}`}
                  film={`https://api.nomoreparties.co${card.image.url}`}
                  url={card.trailerLink}
                  saveMovie={saveMovie}
                  isSaved={isSaved}
                  section={true}
                />
              );
            })
          )
        }
      />
      {searchMovies.length <= showMore ? (
        <></>
      ) : (
        <More click={handleClickMore} />
      )}
      <Footer />
    </>
  );
}

export default Movies;
