const { useParams, Link, Outlet } = require('react-router-dom');

const DogDetails = () => {
  const { dogId } = useParams();
  // useEffect(() => {
  // http запит якщо потрібно
  // }, [])
  return (
    <>
      <h1>Dog details:{dogId}</h1>
      <ul>
        <li>
          <Link to="subbreeds">Subbreeds</Link>
        </li>
        <li>
          <Link to="gallery">Gallery</Link>
        </li>
        <Outlet />
      </ul>
    </>
  );
};

export default DogDetails;
