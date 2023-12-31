import { styled } from 'styled-components';
import { Link } from 'react-router-dom';
import image from '../../images/road.jpg';

export const Hero = styled.section`
  padding-top: 200px;
  padding-bottom: 118px;
  background-image: linear-gradient(
      to right,
      rgba(47, 48, 58, 0.4),
      rgba(47, 48, 58, 0.8)
    ),
    url(${image});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  height: 600px;
`;

export const HeroContainer = styled.div`
  width: 320px;
  padding: 0 10px;
  margin: 0 auto;

  @media (min-width: 768px) {
    width: 768px;
    padding: 0 20px;
    margin: 0 auto;
  }
  @media (min-width: 1440px) {
    width: 1440px;
    padding: 0 20px;
    margin: 0 auto;
  }
`;

export const HeroTitle = styled.h1`
  @media screen and (min-width: 344px) {
    width: 300px;
  }
  font-family: Inter;
  width: 200px;
  margin: 0 auto;
  margin-bottom: 10px;
  color: #fff;
  text-align: center;
`;

export const HeroDescription = styled.p`
  max-width: 700px;
  margin: 0 auto;
  margin-bottom: 25px;
  color: #fff;
  text-align: center;
`;

export const LinkWrapper = styled.div`
  width: 164px;
  height: 44px;
  margin: 0 auto;
  margin-bottom: 15px;
`;

export const StyledLink = styled(Link)`
  display: inline-flex;

  padding: 12px 25px;

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

export const BenefitsTitle = styled.h2`
  @media screen and (max-width: 398px) {
    width: 300px;
    text-align: center;
  }
  max-width: 390px;
  text-align: center;
  margin: 0 auto;
  margin-bottom: 25px;
`;

export const BenefitsList = styled.ul`
  @media screen and (min-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
    justify-content: center;
  }
`;

export const BenefitsItem = styled.li`
  padding: 10px;
  border-radius: 4px;

  background-color: #f5f4fa;

  @media screen and (max-width: 767px) {
    &:not(:last-child) {
      margin-bottom: 30px;
    }
  }

  @media screen and (min-width: 768px) {
    flex-basis: calc((100% - 30px) / 2);
  }

  @media screen and (min-width: 1200px) {
    flex-basis: calc((100% - 90px) / 4);
  }
`;

export const BenefitTitle = styled.h3`
  margin-bottom: 10px;
  font-weight: 700;
  font-size: 14px;
  line-height: 1.14;
  letter-spacing: 0.03em;

  @media screen and (max-width: 767px) {
    text-align: center;
  }
`;

export const BenefitText = styled.p`
  font-size: 14px;
  line-height: 1.71;
  letter-spacing: 0.03em;
  @media screen and (max-width: 767px) {
    text-align: center;
  }
`;

export const ReviewsContainer = styled.div`
  padding: 15px 10px;
  margin: 0 auto;

  @media (min-width: 768px) {
    width: 768px;
    padding: 20px 20px;
    margin: 0 auto;
  }
  @media (min-width: 1440px) {
    width: 1440px;
    padding: 20px 20px;
    margin: 0 auto;
  }
`;

export const ReviewsTitle = styled.h2`
  max-width: 320px;
  margin: 0 auto;
  margin-bottom: 25px;
  text-align: center;
`;
