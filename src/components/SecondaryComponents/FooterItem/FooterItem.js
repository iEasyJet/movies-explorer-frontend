import './FooterItem.css';
function FooterItem(props) {
  return (
    <>
      <li className='nav__item'>
        <a
          className='nav__link'
          href={props.link}
          target='_blank'
          rel='noreferrer'
        >
          {props.name}
        </a>
      </li>
    </>
  );
}

export default FooterItem;
