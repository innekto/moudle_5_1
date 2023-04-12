import { useParams } from 'react-router-dom';

export const Gallery = () => {
  const { dogId } = useParams();
  console.log(useParams());
  return <div>gallery: {dogId}</div>;
};
