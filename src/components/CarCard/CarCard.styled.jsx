import { styled } from 'styled-components';

export const CardWrapper = styled.div`
  display: flex;
  width: 274px;
  height: 426px;
  flex-direction: column;
`;

export const ImageWrapper = styled.div`
  width: 100%;
  position: relative;
  margin-bottom: 14px;
`;

export const CarImage = styled.img`
  border-radius: 14px;
  width: 274px;
  height: 268px;
  object-fit: cover;
  object-position: center;
`;

export const IconWrapper = styled.button`
  position: absolute;
  margin: 0;
  top: 14px;
  right: 14px;
  border: none;
  cursor: pointer;
  background-color: transparent;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding-right: 10px;
  margin-bottom: 8px;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
`;

export const CarName = styled.p`
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

export const CarInfo = styled.ul`
  color: rgba(18, 20, 23, 0.5);
  font-size: 12px;
  font-weight: 400;
  line-height: 1.5;
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 28px;
  gap: 4px;
`;

export const CarInfoItem = styled.li`
  padding-right: 4px;

  &:not(:last-child) {
    border-right: 1px solid rgba(18, 20, 23, 0.1);
  }
`;

export const Country = styled.span`
  padding-right: 4px;
  border-right: 1px solid rgba(18, 20, 23, 0.1);
`;

export const LearnMoreBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 274px;
  height: 44px;
  padding: 12px 99px;
  font-family: inherit;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 1.43;
  color: #fff;
  border-radius: 12px;
  background-color: #3470ff;
  border: none;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    background-color: #0b44cd;
  }
`;
