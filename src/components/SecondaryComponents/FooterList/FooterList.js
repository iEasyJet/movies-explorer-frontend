import './FooterList.css';
import FooterItem from '../FooterItem/FooterItem';

function FooterList() {
  const list = [
    {
      id: '1',
      name: 'Яндекс.Практикум',
      link: 'https://practicum.yandex.ru/profile/web/',
    },
    {
      id: '2',
      name: 'Github',
      link: 'https://github.com/iEasyJet',
    },
  ];
  return (
    <nav className='nav-footer'>
      <ul className='nav_list'>
        {list.map((i) => (
          <FooterItem key={i.id} name={i.name} link={i.link} />
        ))}
      </ul>
    </nav>
  );
}

export default FooterList;
