import CarCard from 'components/CarCard/CarCard';
import { useSelector } from 'react-redux';
import { CarsList } from 'pages/CatalogPage/CatalogPage.styled';

const FavoritesPage = () => {
  const favoriteCars = useSelector(state => state.favorites);
  console.log(favoriteCars);
  return (
    <CarsList>
      {favoriteCars.map(car => (
        <li key={car.id}>{<CarCard car={car} />}</li>
      ))}
    </CarsList>
  );
};

export default FavoritesPage;
