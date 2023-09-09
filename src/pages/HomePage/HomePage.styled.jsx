import { styled } from 'styled-components';
import { Link } from 'react-router-dom';
import image from '../../images/1079101.jpg';
export const Hero = styled.section`
  padding-top: 200px;
  padding-bottom: 118px;
  background-image: url(${image});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  height: 600px;
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
`;

export const BenefitsTitle = styled.h2`
  @media screen and (max-width: 398px) {
    width: 300px;
    text-align: center;
  }
  width: 353px;
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

export const ReviewsTitle = styled.h2`
  max-width: 300px;
  margin: 0 auto;
  margin-bottom: 25px;
`;
