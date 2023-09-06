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
} from './CarCard.styled';
import { ReactComponent as HeartIcon } from '../../images/heart.svg';
import { useState } from 'react';
import { Modal } from 'components/Modal/Modal';

const CarCard = ({
  id,
  year,
  make,
  model,
  img,
  type,
  engineSize,
  fuelConsumption,
  functionalities,
  rentalPrice,
  rentalCompany,
  address,
  rentalConditions,
  accessories,
  mileage,
}) => {
  const splittedAddress = address ? address.split(',') : [];

  const country = splittedAddress.length > 1 ? splittedAddress[1] : '';
  const city = splittedAddress.length > 2 ? splittedAddress[2] : '';

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <CardWrapper>
      <ImageWrapper>
        <HeartIcon
          aria-label="heart icon"
          style={{ position: 'absolute', top: '14px', right: '14px' }}
        />
        <CarImage src={img} alt={`${make} ${model}`} />
      </ImageWrapper>
      <div>
        <Wrapper>
          <CarName>
            {make}
            <Model>{model}</Model>, {year}
          </CarName>
          <span>{rentalPrice}</span>
        </Wrapper>
        <CarInfo>
          <CarInfoItem>
            <Country>{country}</Country>
            <span>{city}</span>
          </CarInfoItem>
          <CarInfoItem>{rentalCompany}</CarInfoItem>
          <CarInfoItem>{type}</CarInfoItem>
          <CarInfoItem>{model}</CarInfoItem>
          <CarInfoItem>{id}</CarInfoItem>
          <CarInfoItem>{functionalities[0]}</CarInfoItem>
        </CarInfo>
      </div>
      <LearnMoreBtn type="button" onClick={openModal}>
        Learn more
      </LearnMoreBtn>
      {isModalOpen && (
        <Modal
          image={img}
          onClose={closeModal}
          id={id}
          year={year}
          make={make}
          model={model}
          type={type}
          functionalities={functionalities}
          rentalPrice={rentalPrice}
          rentalCompany={rentalCompany}
          address={address}
          accessories={accessories}
          engineSize={engineSize}
          fuelConsumption={fuelConsumption}
          rentalConditions={rentalConditions}
          mileage={mileage}
        />
      )}
    </CardWrapper>
  );
};

export default CarCard;
