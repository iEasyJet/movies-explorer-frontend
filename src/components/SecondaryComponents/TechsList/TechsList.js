import './TechsList.css';
function TechsList() {
  const mass = [
    {
      id: 1,
      name: 'HTML',
    },
    {
      id: 2,
      name: 'CSS',
    },
    {
      id: 3,
      name: 'JS',
    },
    {
      id: 4,
      name: 'React',
    },
    {
      id: 5,
      name: 'Git',
    },
    {
      id: 6,
      name: 'Express.js',
    },
    {
      id: 7,
      name: 'mongoDB',
    },
  ];

  return (
    <>
      {mass.map((i) => (
        <li className='component' key={i.id}>
          {i.name}
        </li>
      ))}
    </>
  );
}

export default TechsList;
