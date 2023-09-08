import CarCard from 'components/CarCard/CarCard';
import { useSelector } from 'react-redux';
import { CarsList } from 'pages/CatalogPage/CatalogPage.styled';
import { Container } from 'components/SharedLayout/SharedLayout.styled';

const FavoritesPage = () => {
  const favoriteCars = useSelector(state => state.favorites);
  return (
    <section>
      <Container>
        <CarsList>
          {favoriteCars.map(car => (
            <li key={car.id}>{<CarCard car={car} />}</li>
          ))}
        </CarsList>
      </Container>
    </section>
  );
};

export default FavoritesPage;
