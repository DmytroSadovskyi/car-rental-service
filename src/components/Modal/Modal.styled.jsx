import { styled } from 'styled-components';
import { ReactComponent as CloseIcon } from '../../images/icons/close-icon.svg';

export const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(18, 20, 23, 0.5);
`;

export const ModalWrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  border-radius: 24px;
  padding: 20px;
  max-width: 320px;
  z-index: 100;

  border-radius: 24px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  @media (min-width: 768px) {
    padding: 30px;
    max-width: 100%;
  }
  @media (min-width: 1440px) {
    padding: 40px;
    max-width: 100%;
  }
`;

export const Wrapper = styled.div`
  position: relative;

  background-color: white;
  border-radius: 24px;

  @media (min-width: 768px) {
    width: 461px;
  }
  @media (min-width: 1440px) {
    width: 461px;
  }
`;

export const CloseBtn = styled.button`
  position: absolute;
  color: black;
  top: -12px;
  right: 0px;
  background-color: transparent;
  width: 10px;
  height: 10px;
  border: none;
  cursor: pointer;
  @media (min-width: 768px) {
    top: -22px;
    right: -12px;
    width: 20px;
    height: 20px;
  }
  @media (min-width: 1440px) {
    top: -30px;
    right: -20px;
    width: 24px;
    height: 24px;
  }
`;

export const IconClose = styled(CloseIcon)`
  display: block;
  color: #121417;
  width: 14px;
  height: 14px;
  @media (min-width: 768px) {
    top: -22px;
    right: -12px;
    width: 20px;
    height: 20px;
  }
  @media (min-width: 1440px) {
    top: -30px;
    right: -20px;
    width: 24px;
    height: 24px;
  }
`;

export const Image = styled.img`
  width: 461px;
  height: 248px;
  border-radius: 14px;
  object-fit: cover;
  margin-bottom: 14px;
`;

export const ModalCarName = styled.p`
  margin-bottom: 8px;
  color: #121417;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
`;

export const Model = styled.span`
  margin-left: 5px;
  color: #3470ff;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
`;

export const CarInfoWrapper = styled.div`
  width: 461px;
`;

export const ModalCarInfo = styled.ul`
  width: 300px;
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  margin-bottom: 14px;
  color: rgba(18, 20, 23, 0.5);
  font-size: 12px;
  font-weight: 400;
  line-height: 1.5;
`;
export const CarDescription = styled.p`
  margin-bottom: 24px;
  color: #121417;

  font-size: 14px;
  font-weight: 500;
  line-height: 1.42;
`;

export const Title = styled.p`
  margin-bottom: 8px;
  color: #121417;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.43;
`;

export const AccessoriesInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin: 24px 0;
`;

export const AccessoriesInfoTitle = styled.p`
  color: #121417;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  margin-bottom: 8px;
`;

export const AccessoriesInfoList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  color: rgba(18, 20, 23, 0.5);

  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  gap: 3px;
`;

export const AccessoriesInfoItem = styled.li`
  color: rgba(18, 20, 23, 0.5);
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  border-right: 1px solid rgba(18, 20, 23, 0.2);
  padding-right: 3px;
`;

export const CarInfoSecondary = styled.ul`
  color: rgba(18, 20, 23, 0.5);
  font-size: 12px;
  font-weight: 400;
  line-height: 1.5;
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 24px;
  gap: 4px;
`;

export const RentalInfo = styled.ul`
  width: 320px;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 24px;
  @media (min-width: 768px) {
    width: 100%;
  }
  @media (min-width: 1440px) {
    width: 100%;
  }
`;

export const RentalInfoItem = styled.li`
  padding: 7px 14px;
  border-radius: 35px;
  background: #f9f9f9;
  color: #363535;
  font-size: 12px;
  font-weight: 400;
  line-height: 1.5;

  & span {
    color: #3470ff;
    font-family: Montserrat;
    font-size: 12px;
    font-weight: 600;
    line-height: 1.5;
    letter-spacing: -0.24px;
  }
`;

export const RentalLink = styled.a`
  display: inline-flex;
  padding: 12px 50px;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  background: #3470ff;
  color: #fff;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.43;
  text-decoration: none;

  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    background-color: #0b44cd;
  }
`;
