import CarCard from 'components/CarCard/CarCard';
import { useEffect, useState } from 'react';
import axios from 'axios';

import fetchCars from 'services/carsApi';
import { CarsList, LoadMoreBtn } from './CatalogPage.styled';

const CatalogPage = () => {
  const [cars, setCars] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [carsPerPage] = useState(8);
  const [isloading, setIsLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    const getAllCars = async () => {
      try {
        setIsLoading(true);
        const result = await fetchCars(controller);
        console.log(result);
        setCars(result);
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
  const currentCars = cars.slice(0, indexOfLastCar);
  const handleLoadMore = () => setCurrentPage(prevPage => prevPage + 1);
  return (
    <>
      <p>Cars catalog</p>
      {isloading && <p>Loading cars...</p>}
      <CarsList>
        {currentCars.map(car => (
          <li key={car.id}>{<CarCard car={car} />}</li>
        ))}
      </CarsList>
      {cars.length > indexOfLastCar && (
        <LoadMoreBtn type="button" onClick={handleLoadMore}>
          Load more
        </LoadMoreBtn>
      )}
    </>
  );
};

export default CatalogPage;
