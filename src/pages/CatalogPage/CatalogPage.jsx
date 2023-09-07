import CarCard from 'components/CarCard/CarCard';
import { useEffect, useState } from 'react';

import fetchCars from 'services/carsApi';
import { CarsList, LoadMoreBtn } from './CatalogPage.styled';

const CatalogPage = () => {
  const [cars, setCars] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [carsPerPage] = useState(8);
  const [isloading, setIsLoading] = useState(false);

  useEffect(() => {
    const getAllCars = async () => {
      try {
        setIsLoading(true);
        const result = await fetchCars();
        console.log(result);
        setCars(result);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    getAllCars();
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