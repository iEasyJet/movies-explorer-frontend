import MoviesCardList from '../MoviesCardList/MoviesCardList';import SearchForm from '../SearchForm/SearchForm';
import MainHeader from '../MainHeader/MainHeader';
import More from '../SecondaryComponents/More/More';
import Footer from '../Footer/Footer';
import React, { useEffect, useState, useRef } from 'react';
import CurrentUserContext from '../../context/CurrentUserContext';
import mainApi from '../../utils/MainApi';
import wordDeclension from '../../utils/WordDeclension';
import MoviesCard from '../MoviesCard/MoviesCard';
import search from '../../utils/Search';
import isWindowListener from '../../utils/WindowListener'


function SavedMovies(props) {
  /* Подписка на контекст */
  const currentUser = React.useContext(CurrentUserContext);

  /* Стейты на фильмы */
  const [savedMovies, setSavedMovies] = useState([]);
  const [curMovies, setCurMovies] = useState([]);

  /* Стейты на кнопку еще */
  const [showMore, setShowMore] = useState(12);
  const [plusNumber, setPlusNumber] = useState(3);

  /* Стейт на поиск */
  const [searchValue, setSearchValue] = useState(
    localStorage.getItem('search1') || ''
  );
  const [onSearch, setOnSearch] = useState(false);

  /* Стейт на ширину окна */
  const [width, setWidth] = useState(document.documentElement.scrollWidth);

  /* Рефы */
  const searchRef = useRef();
  const isChecked = useRef();

  /* Стейт на чекбокс */
  const [checkbox, setCheckbox] = useState(
    localStorage.getItem('checked2') || false
  );

  /* Добавление еще фильмов */
  function handleClickMore() {
    setShowMore(showMore + plusNumber);
  }

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props]);

  /* Отслеживание ширины экрана для кол-ва карточек */
  useEffect(() => {
    isWindowListener(width, setWidth, setShowMore, setPlusNumber)
  }, [width]);

  /* Функция удаления сохраннеого фильма */
  function deleteMovie(movie) {
    const id = movie._id;
    const token = localStorage.getItem('jwt');

    mainApi
      .deleteMovie(id, token)
      .then(() => {
        setSavedMovies(savedMovies.filter((item) => item._id !== id));
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

  /* Поиск фильма */
  function onSubmit(e) {
    localStorage.removeItem('checked2');
    localStorage.removeItem('search1');

    e.preventDefault();

    setCurMovies([]);

    const input = searchRef.current.value;
    const isShortFilm = isChecked.current.checked;

    localStorage.setItem('checked2', isShortFilm);
    localStorage.setItem('search1', input);

    setSearchValue(input);
    setCheckbox(localStorage.getItem('checked2'));

    if (!input) {
      props.setOpenModalWindow(true);
      props.setIsOk(false);
      props.setText('Заполните поле поиска!');
    } else {
      const result = search(savedMovies, input, isShortFilm);
      if (result.length === 0) {
        props.setOpenModalWindow(true);
        props.setIsOk(false);
        props.setText('По вашему запросу ничего не найдено!');
      } else {
        setOnSearch(true);
        setCurMovies(result);
      }
    }
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
          onSearch ? (
            curMovies.slice(0, showMore).map((card) => {
              const minute = wordDeclension(card.duration);
              return (
                <MoviesCard
                  key={card._id}
                  card={card}
                  title={card.nameRU}
                  duration={`${card.duration} ${minute}`}
                  film={card.image}
                  url={card.trailerLink}
                  section={false}
                  deleteMovie={deleteMovie}
                />
              );
            })
          ) : savedMovies.length === 0 ? (
            <div className='cardList__nothing'>Тут пока ничего нет</div>
          ) : (
            savedMovies.slice(0, showMore).map((card) => {
              const minute = wordDeclension(card.duration);

              return (
                <MoviesCard
                  key={card._id}
                  card={card}
                  title={card.nameRU}
                  duration={`${card.duration} ${minute}`}
                  film={card.image}
                  url={card.trailerLink}
                  section={false}
                  deleteMovie={deleteMovie}
                />
              );
            })
          )
        }
      />
      {onSearch ? (
        curMovies.length <= showMore ? (
          <></>
        ) : (
          <More click={handleClickMore} />
        )
      ) : savedMovies.length <= showMore ? (
        <></>
      ) : (
        <More click={handleClickMore} />
      )}
      <Footer />
    </>
  );
}

export default SavedMovies;
