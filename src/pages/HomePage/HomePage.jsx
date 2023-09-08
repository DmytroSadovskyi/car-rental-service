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
} from './HomePage.styled';
import { ReviewsSlider } from 'components/ReviewsSlider/ReviewsSlider';
import reviews from '../../reviews.json';
import { Container } from 'components/SharedLayout/SharedLayout.styled';

const HomePage = () => {
  return (
    <>
      <Hero>
        <Container>
          <HeroTitle>DreamCar Rental</HeroTitle>
          <HeroDescription>
            Unforgettable adventures start here! Explore the open road,
            experience the joy of discovery, and enjoy hassle-free mobility.
          </HeroDescription>
          <LinkWrapper>
            <StyledLink to="/catalog">Explore Our Fleet</StyledLink>
          </LinkWrapper>
        </Container>
      </Hero>

      <section>
        <Container>
          <BenefitsTitle>Why choose DreamCar Rental?</BenefitsTitle>
          <BenefitsList>
            <BenefitsItem>
              <BenefitTitle>Wide Selection</BenefitTitle>
              <BenefitText>
                Choose from a diverse range of cars, from elegant sedans to
                adventurous SUVs.
              </BenefitText>
            </BenefitsItem>
            <BenefitsItem>
              <BenefitTitle>Easy Booking</BenefitTitle>
              <BenefitText>
                Our user-friendly website make booking a breeze. Reserve your
                dream car in seconds.
              </BenefitText>
            </BenefitsItem>
            <BenefitsItem>
              <BenefitTitle>Quality Assurance</BenefitTitle>
              <BenefitText>
                Rest easy knowing our vehicles are meticulously maintained and
                cleaned for your safety.
              </BenefitText>
            </BenefitsItem>
            <BenefitsItem>
              <BenefitTitle>Competitive Pricing</BenefitTitle>
              <BenefitText>
                Affordable Luxury: Experience high-end comfort without the high
                price tag.
              </BenefitText>
            </BenefitsItem>
          </BenefitsList>
        </Container>
      </section>
      <section>
        <Container>
          <ReviewsTitle>What our Customers Say?</ReviewsTitle>
          <ReviewsSlider reviews={reviews} />
        </Container>
      </section>
    </>
  );
};

export default HomePage;
