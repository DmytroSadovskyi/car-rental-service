import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import { useEffect, useCallback } from 'react';
import {
  ModalBackdrop,
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
  AccessoriesInfo,
  AccessoriesInfoTitle,
  AccessoriesInfoList,
  AccessoriesInfoItem,
  ModalWrapper,
  Wrapper,
  IconClose,
} from './Modal.styled';

import { CarInfoItem, Country } from 'components/CarCard/CarCard.styled';

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
  description,
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
      <ModalWrapper>
        <Wrapper>
          <CloseBtn type="button" aria-label="close button" onClick={onClose}>
            <IconClose />
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
          <CarDescription>{description}</CarDescription>
          <AccessoriesInfo>
            <AccessoriesInfoTitle>
              Accessories and functionalities:
            </AccessoriesInfoTitle>
            <AccessoriesInfoList>
              <AccessoriesInfoItem>{accessories[0]}</AccessoriesInfoItem>
              <AccessoriesInfoItem>{accessories[1]}</AccessoriesInfoItem>
              <AccessoriesInfoItem>{accessories[2]}</AccessoriesInfoItem>
              <AccessoriesInfoItem>{functionalities[0]}</AccessoriesInfoItem>
              <AccessoriesInfoItem>{functionalities[1]}</AccessoriesInfoItem>
              <AccessoriesInfoItem>{functionalities[2]}</AccessoriesInfoItem>
            </AccessoriesInfoList>
          </AccessoriesInfo>

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
        </Wrapper>
      </ModalWrapper>
    </ModalBackdrop>,
    modalRoot
  );
};

Modal.propTypes = {
  image: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};
