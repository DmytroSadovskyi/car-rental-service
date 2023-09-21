import CarCard from 'components/CarCard/CarCard';
import { useSelector } from 'react-redux';
import { CarsList } from 'pages/CatalogPage/CatalogPage.styled';
import { Container } from 'components/SharedLayout/SharedLayout.styled';
import { Text } from './FavoritesPage.styled';
import { useState } from 'react';

const FavoritesPage = () => {
  const favoriteCars = useSelector(state => state.favorites);
  const [makeFilter, setMakeFilter] = useState('All');
  const [priceFilter, setPriceFilter] = useState({ min: 0, max: 5000 });
  const [mileageFilter, setMileageFilter] = useState({ min: 0, max: 100000 });

  const filterCars = car => {
    if (makeFilter !== 'All' && car.make !== makeFilter) {
      return false;
    }

    const rentalPrice = parseInt(car.rentalPrice.replace(/\D/g, ''));
    if (rentalPrice < priceFilter.min || rentalPrice > priceFilter.max) {
      return false;
    }

    if (car.mileage < mileageFilter.min || car.mileage > mileageFilter.max) {
      return false;
    }

    return true;
  };

  const filteredCars = favoriteCars.filter(filterCars);

  return (
    <section>
      <Container>
        <div>
          <label>Make:</label>
          <select
            value={makeFilter}
            onChange={e => setMakeFilter(e.target.value)}
          >
            <option value="All">All</option>
            <option value="Toyota">Toyota</option>
            <option value="Tesla">Tesla</option>
            <option value="HUMMER">HUMMER</option>
            <option value="Honda">Honda</option>
            <option value="Subaru">Subaru</option>
            <option value="Lincoln">Lincoln</option>
            <option value="Mercedes-Benz">Mercedes-Benz</option>
            <option value="MINI">MINI</option>
            <option value="Kia">Kia</option>
            <option value="GMC">GMC</option>
            <option value="Pontiac">Pontiac</option>
            <option value="Range Rover">Range Rover</option>
            <option value="Volvo">Volvo</option>
            <option value="Nissan">Nissan</option>
            <option value="Mitsubishi">Mitsubishi</option>
            <option value="Buick">Buick</option>
            <option value="Chevrolet">Chevrolet</option>
            <option value="Audi">Audi</option>
            <option value="Aston Martin">Aston Martin</option>
            <option value="Bentley">Bentley</option>
            <option value="Chrysler">Chrysler</option>
            <option value="Hyundai">Hyundai</option>
            <option value="Ford">Ford</option>
            <option value="Lamborghini">Lamborghini</option>
            <option value="BMW">BMW</option>
          </select>
        </div>

        <div>
          <label>Rental Price:</label>
          <input
            type="number"
            min="0"
            max="5000"
            value={priceFilter.min}
            onChange={e =>
              setPriceFilter({
                ...priceFilter,
                min: parseInt(e.target.value),
              })
            }
          />
          <input
            type="number"
            min="0"
            max="5000"
            value={priceFilter.max}
            onChange={e =>
              setPriceFilter({
                ...priceFilter,
                max: parseInt(e.target.value),
              })
            }
          />
        </div>

        <div>
          <label>Mileage:</label>
          <input
            type="number"
            min="0"
            max="100000"
            value={mileageFilter.min}
            onChange={e =>
              setMileageFilter({
                ...mileageFilter,
                min: parseInt(e.target.value),
              })
            }
          />
          <input
            type="number"
            min="0"
            max="100000"
            value={mileageFilter.max}
            onChange={e =>
              setMileageFilter({
                ...mileageFilter,
                max: parseInt(e.target.value),
              })
            }
          />
        </div>
        {filteredCars.length > 0 ? (
          <CarsList>
            {filteredCars.map(car => (
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
