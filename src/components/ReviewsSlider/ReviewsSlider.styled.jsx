import { styled } from 'styled-components';
import Slider from 'react-slick';
import { ReactComponent as ArrowLeft } from '../../images/icons/down-arrow-left.svg';
import { ReactComponent as ArrowRight } from '../../images/icons/down-arrow-right.svg';

export const StyledSlider = styled(Slider)`
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const ReviewsWrapper = styled.div`
  padding: 0 20px 122px 20px;

  display: flex;
  flex-direction: column;

  background-color: #fff;

  @media screen and (min-width: 768px) {
    padding: 0 94px 179px 94px;
  }

  @media screen and (min-width: 1440px) {
    padding: 0 128px 211px 128px;
  }
`;

export const ReviewWrapper = styled.div`
  padding: 32px;

  display: flex;
  gap: 18px;

  height: 170px;

  border-radius: 8px;
  border: 1px solid rgba(17, 17, 17, 0.1);

  @media screen and (min-width: 768px) {
    height: 155px;
  }

  @media screen and (min-width: 1440px) {
    margin-right: 24px;
  }
`;

export const Name = styled.h3`
  margin-bottom: 13px;
  font-size: 18px;
  font-weight: 700;
  line-height: 1;
  color: #343434;
`;

export const Review = styled.p`
  font-size: 14px;
  font-weight: 500;
  line-height: 1.28;

  color: rgba(17, 17, 17, 0.7);
`;

export const Img = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

export const BtnArrowNext = styled.button`
  background-color: transparent;
  border: none;
  position: absolute;
  bottom: -60px;
  left: calc(50% + 5px);

  @media screen and (min-width: 768px) {
    bottom: -80px;
  }
`;

export const BtnArrowPrev = styled.button`
  background-color: transparent;
  border: none;
  position: absolute;
  bottom: -60px;
  left: calc(50% - 80px);

  @media screen and (min-width: 768px) {
    bottom: -80px;
  }
`;

export const IconLeft = styled(ArrowLeft)`
  width: 50px;
  height: 50px;

  stroke: #111;
  fill: transparent;

  @media screen and (min-width: 768px) {
    width: 61px;
    height: 61px;
  }
`;

export const IconRight = styled(ArrowRight)`
  width: 50px;
  height: 50px;

  stroke: #111;
  fill: transparent;

  @media screen and (min-width: 768px) {
    width: 61px;
    height: 61px;
  }
`;
