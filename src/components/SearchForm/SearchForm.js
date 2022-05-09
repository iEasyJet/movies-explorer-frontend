import './SearchForm.css';
import FilterCheckbox from '../SecondaryComponents/FilterCheckbox/FilterCheckbox';

function SearchForm() {
  return (
    <section className='search'>
      <div className='search__box'>
        <div className='search__container'>
          <form className='search__form'>
            <input
              type='search'
              className='search__input'
              name='searchFilm'
              placeholder='Фильм'
            />
            <button type='button' className='search__button'>
              Найти
            </button>
          </form>
          <span className='search__line'></span>
          <div className='search__wrap'>
            <FilterCheckbox />
            <p className='search__text'>Короткометражки</p>
          </div>
        </div>
        <span className='search__line2'></span>
      </div>
    </section>
  );
}

export default SearchForm;
