import { useParams } from 'react-router-dom';

export const SubBreeds = () => {
  const { dogId } = useParams();
  //   console.log(useParams());
  return <div>Subbreeds: {dogId}</div>;
};
