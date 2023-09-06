import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import { useEffect, useCallback } from 'react';
import {
  ModalBackdrop,
  ModalContent,
  Image,
  CloseBtn,
  Model,
  ModalCarName,
  ModalCarInfo,
  CarInfoWrapper,
  CarDescription,
  Title,
  RentalInfoItem,
  RentalInfo,
  RentalLink,
} from './Modal.styled';

import { ReactComponent as CloseIcon } from '../../images/close-icon.svg';
import {
  CarInfo,
  CarInfoItem,
  Country,
} from 'components/CarCard/CarCard.styled';

const modalRoot = document.querySelector('#modal-root');

export const Modal = ({
  image,
  onClose,
  id,
  year,
  make,
  model,
  type,
  functionalities,
  rentalPrice,
  address,
  accessories,
  fuelConsumption,
  engineSize,
  mileage,
  rentalConditions,
}) => {
  const splittedAddress = address ? address.split(',') : [];
  const country = splittedAddress.length > 1 ? splittedAddress[1] : '';
  const city = splittedAddress.length > 2 ? splittedAddress[2] : '';

  const splittedRentalConditions = rentalConditions.split('\n', 3);
  const firstElement = splittedRentalConditions[0];
  const match = firstElement.match(/\d+/);
  const number = parseInt(match[0], 10);

  const handleKeyDown = useCallback(
    e => {
      if (e.code === 'Escape') {
        onClose();
      }
    },
    [onClose]
  );

  const handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);

  return createPortal(
    <ModalBackdrop onClick={handleBackdropClick}>
      <ModalContent>
        <CloseBtn type="button" aria-label="close button" onClick={onClose}>
          <CloseIcon />
        </CloseBtn>
        <Image src={image} alt={`${make} ${model}`} />
        <CarInfoWrapper>
          <ModalCarName>
            {make}
            <Model>{model}</Model>, {year}
          </ModalCarName>
          <ModalCarInfo>
            <CarInfoItem>
              <Country>{country}</Country>
              <span>{city}</span>
            </CarInfoItem>
            <CarInfoItem>id: {id}</CarInfoItem>
            <CarInfoItem>Year: {year}</CarInfoItem>
            <CarInfoItem>Type: {type}</CarInfoItem>
            <CarInfoItem>Fuel Consumption: {fuelConsumption}</CarInfoItem>
            <CarInfoItem>Engine Size: {engineSize}</CarInfoItem>
          </ModalCarInfo>
        </CarInfoWrapper>
        <CarDescription>
          The Buick Enclave is a stylish and spacious SUV known for its
          comfortable ride and luxurious features.
        </CarDescription>
        <CarInfoWrapper>
          <Title>Accessories and functionalities:</Title>
          <CarInfo>
            <CarInfoItem>{accessories[0]}</CarInfoItem>
            <CarInfoItem>{accessories[1]}</CarInfoItem>
            <CarInfoItem>{accessories[2]}</CarInfoItem>
            <CarInfoItem>{functionalities[0]}</CarInfoItem>
            <CarInfoItem>{functionalities[1]}</CarInfoItem>
            <CarInfoItem>{functionalities[2]}</CarInfoItem>
          </CarInfo>
        </CarInfoWrapper>

        <div>
          <Title>Rental Conditions:</Title>
          <RentalInfo>
            <RentalInfoItem>
              Minimum age: <span>{number}</span>
            </RentalInfoItem>
            <RentalInfoItem>{splittedRentalConditions[1]}</RentalInfoItem>
            <RentalInfoItem>{splittedRentalConditions[2]}</RentalInfoItem>
            <RentalInfoItem>
              Mileage: <span>{mileage.toLocaleString('en-EN')}</span>
            </RentalInfoItem>
            <RentalInfoItem>
              Price: <span>{rentalPrice}</span>
            </RentalInfoItem>
          </RentalInfo>
        </div>

        <RentalLink href="tel:+380730000000">Rental car</RentalLink>
      </ModalContent>
    </ModalBackdrop>,
    modalRoot
  );
};

Modal.propTypes = {
  image: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};
