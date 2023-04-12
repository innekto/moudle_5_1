import { Link } from 'react-router-dom';

const Dogs = () => {
  // useEffect(() => {
  // http запит якщо потрібно
  // }, [])
  const dogs = ['dog-1', 'dog-2', 'dpg-3', 'dog-4', 'dog-5'];
  return (
    <div>
      {dogs.map(dog => {
        return (
          <Link key={dog} to={`${dog}`}>
            {dog}
          </Link>
        );
      })}
    </div>
  );
};

export default Dogs;
