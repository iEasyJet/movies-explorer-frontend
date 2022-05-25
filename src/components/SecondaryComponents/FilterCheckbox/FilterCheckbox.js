import './FilterCheckbox.css';
function FilterCheckbox(props) {
  return (
    <>
      <input
        type='checkbox'
        defaultChecked={props.checked}
        name='shortFilm'
        id='1'
        className='checkbox'
        ref={props.checkRef}
      />
      <label htmlFor='1' className='label'></label>
    </>
  );
}

export default FilterCheckbox;
