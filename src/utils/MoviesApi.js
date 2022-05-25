class MoviesApi {
  constructor(config) {
    this._url = config.url;
  }
  // Анализирование ответа
  _parseResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(
      new Error(`Произошла ошибка со статус-кодом ${res.status}`)
    );
  }
  getMovies() {
    return fetch(this._url).then((res) =>
      this._parseResponse(res)
    );
  }
}

const configApi = {
  url: 'https://api.nomoreparties.co/beatfilm-movies',
};

const moviesApi = new MoviesApi(configApi);

export default moviesApi;
