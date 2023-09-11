import CarCard from 'components/CarCard/CarCard';
import { useSelector } from 'react-redux';
import { CarsList } from 'pages/CatalogPage/CatalogPage.styled';
import { Container } from 'components/SharedLayout/SharedLayout.styled';
import { Text } from './FavoritesPage.styled';

const FavoritesPage = () => {
  const favoriteCars = useSelector(state => state.favorites);
  return (
    <section>
      <Container>
        {favoriteCars.length > 0 ? (
          <CarsList>
            {favoriteCars.map(car => (
              <li key={car.id}>{<CarCard car={car} />}</li>
            ))}
          </CarsList>
        ) : (
          <Text>There are no favorite cars yet</Text>
        )}
      </Container>
    </section>
  );
};

export default FavoritesPage;