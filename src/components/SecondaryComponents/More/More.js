import './More.css';
function More(props) {
  return (
    <section className='more'>
      <button type='button' className='more__button' onClick={props.click}>
        Ещё
      </button>
    </section>
  );
}

export default More;
