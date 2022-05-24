import './Promo.css';
import { PromoText } from '../../utils/constants';

function Promo() {
  return (
    <div className='promo'>
      <div className='promo__container'>
        <h2 className='promo__title'>
          {PromoText}
        </h2>
      </div>
    </div>
  );
}

export default Promo;
