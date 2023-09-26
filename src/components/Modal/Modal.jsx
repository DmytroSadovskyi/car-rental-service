import { createPortal } from 'react-dom';
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
import { useTranslation } from 'react-i18next';
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
  const { t } = useTranslation();

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
                <Country>{t(`cars.${id}.city`)}</Country>
                <span>{t('country')}</span>
              </CarInfoItem>
              <CarInfoItem>id: {id}</CarInfoItem>
              <CarInfoItem>
                {t('year')}: {year}
              </CarInfoItem>
              <CarInfoItem>
                {t('type')}: {type}
              </CarInfoItem>
              <CarInfoItem>
                {t('fuelConsumption')}: {fuelConsumption}
              </CarInfoItem>
              <CarInfoItem>
                {t('engineSize')}: {engineSize}
              </CarInfoItem>
            </ModalCarInfo>
          </CarInfoWrapper>
          <CarDescription>{t(`cars.${id}.description`)}</CarDescription>
          <AccessoriesInfo>
            <AccessoriesInfoTitle>{t('functionalities')}:</AccessoriesInfoTitle>
            <AccessoriesInfoList>
              <AccessoriesInfoItem>{accessories[0]}</AccessoriesInfoItem>
              <AccessoriesInfoItem>{accessories[1]}</AccessoriesInfoItem>
              <AccessoriesInfoItem>{accessories[2]}</AccessoriesInfoItem>
              <AccessoriesInfoItem>{functionalities[0]}</AccessoriesInfoItem>
              <AccessoriesInfoItem>{functionalities[1]}</AccessoriesInfoItem>
              <AccessoriesInfoItem>{functionalities[2]}</AccessoriesInfoItem>
            </AccessoriesInfoList>
          </AccessoriesInfo>

          <Title>{t('rentalConditions')}:</Title>
          <RentalInfo>
            <RentalInfoItem>
              {t('minimumAge')}: <span>{number}</span>
            </RentalInfoItem>
            <RentalInfoItem>{t('secondRentalCondition')}</RentalInfoItem>
            <RentalInfoItem>
              {t(`cars.${id}.thirdRentalCondition`)}
            </RentalInfoItem>
            <RentalInfoItem>
              {t('mileage')}: <span>{mileage.toLocaleString('en-EN')}</span>
            </RentalInfoItem>
            <RentalInfoItem>
              {t('rentalPrice')}: <span>{rentalPrice}</span>
            </RentalInfoItem>
          </RentalInfo>

          <RentalLink href="tel:+380730000000">{t('rentalButton')}</RentalLink>
        </Wrapper>
      </ModalWrapper>
    </ModalBackdrop>,
    modalRoot
  );
};
