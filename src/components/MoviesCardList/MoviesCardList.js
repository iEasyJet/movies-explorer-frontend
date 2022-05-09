import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList(props) {
  return (
    <section className='cardList'>
      <ul className='cardList__container'>
        {props.mass.map((card) => (
          <MoviesCard
            key={card.id}
            title={card.title}
            duration={card.duration}
            film={card.film}
            className={card.className}
            text={card.text}
          />
        ))}
      </ul>
    </section>
  );
}

export default MoviesCardList;
