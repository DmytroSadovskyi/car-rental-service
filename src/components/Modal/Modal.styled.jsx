import { styled } from 'styled-components';

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

export const ModalContent = styled.div`
  position: relative;
  width: 541px;
  background-color: #ffff;
  padding: 40px;
  border-radius: 24px;
`;

export const CloseBtn = styled.button`
  position: absolute;
  top: 16px;
  right: 20px;
  background-color: transparent;
  width: 24px;
  height: 24px;
  border: none;
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
  margin-bottom: 24px;
  width: 390px;
`;

export const ModalCarInfo = styled.ul`
  width: 390px;
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 14px;
  gap: 4px;
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

export const RentalInfo = styled.ul`
  width: 400px;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 24px;
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
`;
