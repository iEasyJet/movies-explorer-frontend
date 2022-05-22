import './MoviesCardList.css';

function MoviesCardList(props) {
  return (
    <section className='cardList'>
      <ul className='cardList__container'>{props.children}</ul>
    </section>
  );
}

export default MoviesCardList;
