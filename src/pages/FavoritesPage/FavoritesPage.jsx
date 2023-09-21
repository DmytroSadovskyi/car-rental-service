import CarCard from 'components/CarCard/CarCard';
import { useSelector } from 'react-redux';
import { CarsList } from 'pages/CatalogPage/CatalogPage.styled';
import { Container } from 'components/SharedLayout/SharedLayout.styled';
import { useState, useCallback, useEffect } from 'react';
import Filter from 'components/Filter/Filter';
import { Text } from './FavoritesPage.styled';
import { SortButton } from 'pages/CatalogPage/CatalogPage.styled';
import { ReactComponent as DescendingIcon } from '../../images/icons/sort-amount-desc.svg';
import { ReactComponent as AscendingIcon } from '../../images/icons/sort-amount-asc.svg';

const FavoritesPage = () => {
  const favoriteCars = useSelector(state => state.favorites);

  const [makes, setMakes] = useState([]);

  useEffect(() => {
    const uniqueMakes = [...new Set(favoriteCars.map(car => car.make))];
    setMakes(uniqueMakes);
    setFilteredCars(favoriteCars);
  }, [favoriteCars]);

  const [filteredCars, setFilteredCars] = useState(favoriteCars);
  const [applyFiltersFlag, setApplyFiltersFlag] = useState(false);

  const [makeFilter, setMakeFilter] = useState('');
  const [priceFilter, setPriceFilter] = useState('');
  const [mileageFilter, setMileageFilter] = useState({
    min: '',
    max: '',
  });

  const [sortOrder, setSortOrder] = useState('ascending');

  const filterCars = useCallback(
    car => {
      if (makeFilter !== '' && car.make !== makeFilter) {
        return false;
      }

      const rentalPriceNumeric = parseInt(
        car.rentalPrice.replace(/\D/g, ''),
        10
      );

      if (
        priceFilter !== '' &&
        rentalPriceNumeric < parseInt(priceFilter, 10)
      ) {
        return false;
      }

      if (
        (mileageFilter.min !== '' && car.mileage < mileageFilter.min) ||
        (mileageFilter.max !== '' && car.mileage > mileageFilter.max)
      ) {
        return false;
      }

      return true;
    },
    [makeFilter, priceFilter, mileageFilter]
  );

  useEffect(() => {
    if (applyFiltersFlag) {
      const filteredCars = favoriteCars.filter(filterCars);
      setFilteredCars(filteredCars);
      setApplyFiltersFlag(false);
    }
  }, [applyFiltersFlag, favoriteCars, filterCars]);

  const sortedCars = [...filteredCars].sort((a, b) => {
    if (sortOrder === 'ascending') {
      return (
        parseInt(a.rentalPrice.replace(/\D/g, ''), 10) -
        parseInt(b.rentalPrice.replace(/\D/g, ''), 10)
      );
    } else {
      return (
        parseInt(b.rentalPrice.replace(/\D/g, ''), 10) -
        parseInt(a.rentalPrice.replace(/\D/g, ''), 10)
      );
    }
  });

  const handleReset = () => {
    setMakeFilter('');
    setPriceFilter(0);
    setMileageFilter({ min: '', max: '' });
    setApplyFiltersFlag(true);
    setFilteredCars(favoriteCars);
  };

  const toggleSortOrder = () => {
    setSortOrder(prevSortOrder =>
      prevSortOrder === 'ascending' ? 'descending' : 'ascending'
    );
  };

  return (
    <section>
      <Container>
        <Filter
          makeFilter={makeFilter}
          priceFilter={priceFilter}
          mileageFilter={mileageFilter}
          setMakeFilter={setMakeFilter}
          setPriceFilter={setPriceFilter}
          setMileageFilter={setMileageFilter}
          makes={makes}
          handleReset={handleReset}
          onApplyFilters={() => {
            setApplyFiltersFlag(true);
          }}
        >
          <SortButton
            type="button"
            aria-label="sorting-button"
            onClick={toggleSortOrder}
          >
            {sortOrder === 'ascending' ? <DescendingIcon /> : <AscendingIcon />}
          </SortButton>
        </Filter>

        {sortedCars.length > 0 ? (
          <CarsList>
            {sortedCars.map(car => (
              <li key={car.id}>{<CarCard car={car} />}</li>
            ))}
          </CarsList>
        ) : (
          <Text>There is no favorite cars yet</Text>
        )}
      </Container>
    </section>
  );
};

export default FavoritesPage;
