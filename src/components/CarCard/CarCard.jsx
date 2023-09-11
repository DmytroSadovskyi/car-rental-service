import {
  CardWrapper,
  CarImage,
  Wrapper,
  Model,
  LearnMoreBtn,
  ImageWrapper,
  CarInfo,
  CarInfoItem,
  Country,
  CarName,
  IconWrapper,
} from './CarCard.styled';
import { ReactComponent as HeartIcon } from '../../images/icons/heart.svg';
import { ReactComponent as HeartIconFavorite } from '../../images/icons/heart-favorite.svg';

import { useState } from 'react';
import { Modal } from 'components/Modal/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { addToFavorites, removeFromFavorites } from 'redux/favoriteSlice';

const CarCard = ({ car }) => {
  const dispatch = useDispatch();
  const favorites = useSelector(state => state.favorites);
  const addFavorite = () => {
    dispatch(addToFavorites(car));
  };

  const removeFavorite = () => {
    dispatch(removeFromFavorites(car));
  };

  const isFavorite = favorites?.some(favoriteCar => favoriteCar?.id === car.id);

  const splittedAddress = car.address ? car.address.split(',') : [];

  const country = splittedAddress.length > 1 ? splittedAddress[1] : '';
  const city = splittedAddress.length > 2 ? splittedAddress[2] : '';

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
    document.body.classList.add('no-scroll');
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.classList.remove('no-scroll');
  };

  return (
    <CardWrapper>
      <ImageWrapper>
        <IconWrapper
          aria-label="heart icon"
          onClick={!isFavorite ? addFavorite : removeFavorite}
        >
          {isFavorite ? <HeartIconFavorite /> : <HeartIcon />}
        </IconWrapper>

        <CarImage src={car.img} alt={`${car.make} ${car.model}`} />
      </ImageWrapper>
    
        <Wrapper>
          <CarName>
            {car.make}
            <Model>{car.model}</Model>, {car.year}
          </CarName>
          <span>{car.rentalPrice}</span>
        </Wrapper>
        <CarInfo>
          <CarInfoItem>
            <Country>{country}</Country>
            <span>{city}</span>
          </CarInfoItem>
          <CarInfoItem>{car.rentalCompany}</CarInfoItem>
          <CarInfoItem>{car.type}</CarInfoItem>
          <CarInfoItem>{car.model}</CarInfoItem>
          <CarInfoItem>{car.id}</CarInfoItem>
          <CarInfoItem>{car.functionalities[0]}</CarInfoItem>
        </CarInfo>
     
      <LearnMoreBtn type="button" onClick={openModal}>
        Learn more
      </LearnMoreBtn>
      {isModalOpen && (
        <Modal
          image={car.img}
          onClose={closeModal}
          id={car.id}
          year={car.year}
          make={car.make}
          model={car.model}
          type={car.type}
          functionalities={car.functionalities}
          rentalPrice={car.rentalPrice}
          rentalCompany={car.rentalCompany}
          address={car.address}
          accessories={car.accessories}
          engineSize={car.engineSize}
          fuelConsumption={car.fuelConsumption}
          rentalConditions={car.rentalConditions}
          mileage={car.mileage}
          description={car.description}
        />
      )}
    </CardWrapper>
  );
};

export default CarCard;
