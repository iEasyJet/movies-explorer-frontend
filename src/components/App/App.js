import React from 'react';
import { useState, useEffect } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';
import './App.css';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Main from '../Main/Main';
import PageNotFound from '../PageNotFound/PageNotFound';
import ModalWindow from '../ModalWindow/ModalWindow';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

import mainApi from '../../utils/MainApi';
import CurrentUserContext from '../../context/CurrentUserContext';

function App() {
  /* Стейты */
  const [loggedIn, setLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});

  /* История */
  const history = useHistory();

  /* Открытие модального окна */
  const [openModalWindow, setOpenModalWindow] = useState(false);

  /* Смена картинки у модального окна */
  const [isOk, setIsOk] = useState(false);

  /* Смена текста у модального окна */
  const [text, setText] = useState('');

  /* Закрытие модального окна */
  // eslint-disable-next-line react-hooks/exhaustive-deps
  function closeModalWindow() {
    setOpenModalWindow(false);
  }

  /* Закрытие по ESC для модального окна */
  useEffect(() => {
    if (!openModalWindow) return;
    function handleEscClose(e) {
      if (e.key === 'Escape') {
        closeModalWindow();
      }
    }
    document.addEventListener('keydown', handleEscClose);
    return () => {
      document.removeEventListener('keydown', handleEscClose);
    };
  }, [openModalWindow, closeModalWindow]);

  /* Регистрация */
  const isRegistration = (data) => {
    return mainApi
      .registration(data)
      .then(() => {
        history.push('/sign-in');
        setOpenModalWindow(true);
        setIsOk(true);
        setText('Регистрация прошла успешна!');
      })
      .catch((err) => {
        setOpenModalWindow(true);
        setIsOk(false);
        setText('Произошла ошибка при регистрации!');
      });
  };

  /* Авторизация */
  const isLogin = (data) => {
    return mainApi.login(data).then((res) => {
      localStorage.setItem('jwt', res.token);
      localStorage.setItem('movies', JSON.stringify([]));
      setLoggedIn(true);
      mainApi
        .getUserInfo(res.token)
        .then((res) => {
          setCurrentUser(res);
        })
        .catch((err) => {
          setOpenModalWindow(true);
          setIsOk(false);
          setText('Произошла ошибка при получении данных пользователя!');
        });
      history.push('/movies');
    });
  };

  /* Выход пол-ля */
  function logout() {
    history.push('/sign-up');
    setLoggedIn(false);
    localStorage.clear();
    setCurrentUser({});
  }

  /* Проверка токена для авторизации */
  useEffect(() => {
    const token = localStorage.getItem('jwt');
    if (token) {
      mainApi
        .checkToken(token)
        .then(() => {
          setLoggedIn(true);
          mainApi
            .getUserInfo(token)
            .then((res) => {
              setCurrentUser(res);
            })
            .catch((err) => {
              setOpenModalWindow(true);
              setIsOk(false);
              setText('Произошла ошибка при получении данных пользователя!');
            });
          history.push('/movies');
        })
        .catch((err) => {
          setOpenModalWindow(true);
          setIsOk(false);
          setText('Произошла ошибка при авторизации!');
        });
    }
  }, [loggedIn, history]);

  /* Смена данных пользователя */
  function changeUserData(data) {
    const token = localStorage.getItem('jwt');
    mainApi
      .changeUserInfo(data, token)
      .then((res) => {
        setCurrentUser(res);
        setOpenModalWindow(true);
        setIsOk(true);
        setText('Данные успешно изменены!');
      })
      .catch((err) => {
        setOpenModalWindow(true);
        setIsOk(false);
        setText('Произошла ошибка при изменении данных!');
      });
  }

  return (
    <>
      <CurrentUserContext.Provider value={currentUser}>
        <Switch>
          <Route exact path='/'>
            <Main loggedIn={loggedIn} />
          </Route>

          <ProtectedRoute
            path='/movies'
            loggedIn={loggedIn}
            component={Movies}
            setOpenModalWindow={setOpenModalWindow}
            setIsOk={setIsOk}
            setText={setText}
          />

          <ProtectedRoute
            path='/saved-movies'
            loggedIn={loggedIn}
            component={SavedMovies}
            setOpenModalWindow={setOpenModalWindow}
            setIsOk={setIsOk}
            setText={setText}
          />

          <ProtectedRoute
            path='/profile'
            loggedIn={loggedIn}
            component={Profile}
            logout={logout}
            changeUserData={changeUserData}
          />

          <Route path='/sign-up'>
            <Register submit={isRegistration} />
          </Route>

          <Route path='/sign-in'>
            <Login submit={isLogin} />
          </Route>

          <Route path='*' component={PageNotFound} />
        </Switch>

        <ModalWindow
          isOpen={openModalWindow}
          isOk={isOk}
          text={text}
          close={closeModalWindow}
        />
      </CurrentUserContext.Provider>
    </>
  );
}

export default App;
