import CarCard from 'components/CarCard/CarCard';
import { useEffect, useState, useCallback } from 'react';
import axios from 'axios';
import fetchCars from 'services/carsApi';
import { CarsList, LoadMoreBtn, SortButton } from './CatalogPage.styled';
import { Container } from 'components/SharedLayout/SharedLayout.styled';
import FallBackLoader from '../../components/FallBackLoader/FallBackLoader';
import Filter from 'components/Filter/Filter';
import { ReactComponent as DescendingIcon } from '../../images/icons/sort-amount-desc.svg';
import { ReactComponent as AscendingIcon } from '../../images/icons/sort-amount-asc.svg';
import { Text } from 'pages/FavoritesPage/FavoritesPage.styled';

import toast, { Toaster } from 'react-hot-toast';

const CatalogPage = () => {
  const [cars, setCars] = useState([]);
  const [makes, setMakes] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [carsPerPage] = useState(8);
  const [isLoading, setIsLoading] = useState(false);

  const [filteredCars, setFilteredCars] = useState([]);
  const [applyFiltersFlag, setApplyFiltersFlag] = useState(false);

  const [makeFilter, setMakeFilter] = useState('');
  const [priceFilter, setPriceFilter] = useState('');

  const [showNoCarsMessage, setShowNoCarsMessage] = useState(false);

  const [mileageFilter, setMileageFilter] = useState({
    min: '',
    max: '',
  });

  const [sortOrder, setSortOrder] = useState('ascending');

  useEffect(() => {
    const controller = new AbortController();
    const getAllCars = async () => {
      try {
        setIsLoading(true);
        const result = await fetchCars(controller);
        setCars(result);
        const uniqueMakes = [...new Set(result.map(car => car.make))];
        setMakes(uniqueMakes);
        setFilteredCars(result);
      } catch (error) {
        if (axios.isCancel(error)) {
          console.log('Запит було скасовано', error.message);
        } else {
          console.error('Помилка при виконанні запиту', error);
        }
      } finally {
        setIsLoading(false);
      }
    };

    getAllCars();

    return () => {
      controller.abort();
    };
  }, []);

  const indexOfLastCar = currentPage * carsPerPage;
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
        rentalPriceNumeric >= parseInt(priceFilter, 10)
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
      const filteredCars = cars.filter(filterCars);
      setFilteredCars(filteredCars);
      if (filteredCars.length === 0) {
        setShowNoCarsMessage(true);
        toast.error('No cars match your criteria. Please adjust your filters.');
      } else {
        setShowNoCarsMessage(false);
      }

      setApplyFiltersFlag(false);
    }
  }, [applyFiltersFlag, cars, filterCars]);

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

  const currentCars = sortedCars.slice(0, indexOfLastCar);

  const handleLoadMore = () => setCurrentPage(prevPage => prevPage + 1);

  const handleReset = () => {
    setMakeFilter('');
    setPriceFilter('');
    setMileageFilter({ min: '', max: '' });
    setApplyFiltersFlag(true);
    setShowNoCarsMessage(false);
  };

  const toggleSortOrder = () => {
    setSortOrder(prevSortOrder =>
      prevSortOrder === 'ascending' ? 'descending' : 'ascending'
    );
  };

  return (
    <section>
      {isLoading && <FallBackLoader />}
      <Toaster />
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
        {currentCars.length === 0 && showNoCarsMessage && (
          <>
            <Text>
              No cars match your criteria. Please adjust your filters.
            </Text>
          </>
        )}
        <CarsList>
          {currentCars.map(car => (
            <li key={car.id}>{<CarCard car={car} />}</li>
          ))}
        </CarsList>
        {filteredCars.length > indexOfLastCar && (
          <LoadMoreBtn type="button" onClick={handleLoadMore}>
            Load more
          </LoadMoreBtn>
        )}
      </Container>
    </section>
  );
};

export default CatalogPage;
