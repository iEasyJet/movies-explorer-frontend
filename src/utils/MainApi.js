class MainApi {
  constructor(config) {
    this._url = config.url;
  }
  // Анализирование ответа
  _parseResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(
      console.log(res),
      new Error(`Произошла ошибка со статус-кодом ${res.status}`)
    );
  }

  // Получение данных пользователя
  getUserInfo(token) {
    return fetch(`${this._url}/users/me`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((res) => this._parseResponse(res));
  }

  // Изменение информации о пользователе
  changeUserInfo(data, token) {
    return fetch(`${this._url}/users/me`, {
      method: 'PATCH',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: data.name,
        email: data.email,
      }),
    }).then((res) => this._parseResponse(res));
  }

  // Регистрация /sign-up
  registration(data) {
    return fetch(`${this._url}/signup`, {
      method: 'POST',

      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },

      body: JSON.stringify({
        password: data.password,
        email: data.email,
        name: data.name,
      }),
    }).then((res) => this._parseResponse(res));
  }

  // Авторизация /sign-in
  login(data) {
    return fetch(`${this._url}/signin`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        password: data.password,
        email: data.email,
      }),
    }).then((res) => this._parseResponse(res));
  }

  // Проверка валидности токена /users/me
  checkToken(token) {
    return fetch(`${this._url}/users/me`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    }).then((res) => this._parseResponse(res));
  }

  // Получение сохраненных фильмов
  getSavedMovies(token) {
    return fetch(`${this._url}/movies`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((res) => this._parseResponse(res));
  }

  // Добавление сохраненного фильма
  createMovie(data, token) {
    return fetch(`${this._url}/movies`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },

      body: JSON.stringify({
        country: data.country,
        director: data.director,
        duration: data.duration,
        year: data.year,
        description: data.description,
        image: data.image,
        trailerLink: data.trailerLink,
        nameRU: data.nameRU,
        nameEN: data.nameEN,
        movieId: data.movieId,
      }),
    }).then((res) => this._parseResponse(res));
  }

  // Удаление сохраненного фильма
  deleteMovie(moviesId, token) { 
    return fetch(`${this._url}/movies/${moviesId}`, { 
      method: "DELETE", 
      headers: { 
        'Authorization': `Bearer ${token}`, 
      }, 
    }).then(res => this._parseResponse(res)); 
  } 
}

const configApi = {
  url: 'https://api.diploma.easyjet.nomoredomains.work',
  /* url: 'http://localhost:3001', */
};

const mainApi = new MainApi(configApi);

export default mainApi;
