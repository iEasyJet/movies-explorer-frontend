import './More.css';
import { MoreText } from '../../../utils/constants';

function More(props) {
  return (
    <section className='more'>
      <button type='button' className='more__button' onClick={props.click}>
        {MoreText}
      </button>
    </section>
  );
}

export default More;
