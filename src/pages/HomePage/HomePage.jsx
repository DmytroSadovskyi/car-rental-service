import {
  Hero,
  HeroDescription,
  HeroTitle,
  LinkWrapper,
  StyledLink,
  BenefitsTitle,
  ReviewsTitle,
  BenefitsList,
  BenefitsItem,
  BenefitTitle,
  BenefitText,
  HeroContainer,
  ReviewsContainer,
} from './HomePage.styled';
import { ReviewsSlider } from 'components/ReviewsSlider/ReviewsSlider';
import reviews from '../../reviews.json';
import { Container } from 'components/SharedLayout/SharedLayout.styled';
import { useTranslation } from 'react-i18next';

const HomePage = () => {
  const { t } = useTranslation();
  return (
    <>
      <Hero>
        <HeroContainer>
          <HeroTitle>DreamCar Rental</HeroTitle>
          <HeroDescription>{t('hero')}</HeroDescription>
          <LinkWrapper>
            <StyledLink to="/catalog">{t('buttonText')}</StyledLink>
          </LinkWrapper>
        </HeroContainer>
      </Hero>

      <section>
        <Container>
          <BenefitsTitle>{t('benefitsTitle')}</BenefitsTitle>
          <BenefitsList>
            <BenefitsItem>
              <BenefitTitle>{t('firstBenefitTitle')}</BenefitTitle>
              <BenefitText>{t('firstBenefitDesc')}</BenefitText>
            </BenefitsItem>
            <BenefitsItem>
              <BenefitTitle>{t('secondBenefitTitle')}</BenefitTitle>
              <BenefitText>{t('secondBenefitDesc')}</BenefitText>
            </BenefitsItem>
            <BenefitsItem>
              <BenefitTitle>{t('thirdBenefitTitle')}</BenefitTitle>
              <BenefitText>{t('thirdBenefitDesc')}</BenefitText>
            </BenefitsItem>
            <BenefitsItem>
              <BenefitTitle>{t('fourthBenefitTitle')}</BenefitTitle>
              <BenefitText>{t('fourthBenefitDesc')}</BenefitText>
            </BenefitsItem>
          </BenefitsList>
        </Container>
      </section>
      <section>
        <ReviewsContainer>
          <ReviewsTitle>{t('reviewsTitle')}</ReviewsTitle>
          <ReviewsSlider reviews={reviews} />
        </ReviewsContainer>
      </section>
    </>
  );
};

export default HomePage;
