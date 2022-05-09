import './MoviesCard.css';
function MoviesCard(props) {
  return (
    <>
      <li className='movie'>
        <div className='movie__box'>
          <p className='movie__title'>{props.title}</p>
          <p className='movie__duration'>{props.duration}</p>
        </div>
        <img src={props.film} alt={props.title} className='movie__img' />
        <button type='button' className={props.className}>
          {props.text}
        </button>
      </li>
    </>
  );
}

export default MoviesCard;
