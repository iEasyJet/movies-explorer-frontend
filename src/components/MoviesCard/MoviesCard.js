import './MoviesCard.css';
import { useState } from 'react';
import CardButton from '../SecondaryComponents/CardButton/CardButton';
function MoviesCard(props) {
  /* Стейт на переключение кнопки */
  const [switchButton, setSwitchButton] = useState(false);

  /* Сохранение фильма */
  function saveMovie() {
    setSwitchButton(true);
    props.saveMovie(props.card);
  }

  /* Удаление фильма */
  function deleteMovie() {
    props.card.idForDelete = props.cardIdForDelete
    props.deleteMovie(props.card);
  }

  return (
    <>
      <li className='movie'>
        <div className='movie__box'>
          <p className='movie__title'>{props.title}</p>
          <p className='movie__duration'>{props.duration}</p>
        </div>
        <>
          <a
            href={props.url}
            target='_blank'
            rel='noreferrer'
            className='movie__img'
            style={{ backgroundImage: `url(${props.film})` }}
          >
            <></>
          </a>
        </>
        {props.section && props.isSaved ? (
          <CardButton class='movie__button_saved' click={deleteMovie}/>
        ) : props.section && !props.isSaved ? (
          <CardButton
            class={`${switchButton ? 'movie__button_saved' : 'movie__button'}`}
            click={saveMovie}
            text={`${switchButton ? '' : 'Сохранить'}`}
          />
        ) : (
          <CardButton class='movie__button_delete' click={deleteMovie} />
        )}
      </li>
    </>
  );
}

export default MoviesCard;
