import {
  StyledSlider,
  ReviewsWrapper,
  ReviewWrapper,
  Name,
  Review,
  BtnArrowPrev,
  BtnArrowNext,
  IconLeft,
  IconRight,
  Img,
} from './ReviewsSlider.styled';
import { useEffect, useState } from 'react';
import 'slick-carousel/slick/slick.css';
import { useTranslation } from 'react-i18next';

export const ReviewsSlider = ({ reviews }) => {
  const [slide, setSlide] = useState(window.innerWidth >= 1440 ? 2 : 1);

  useEffect(() => {
    const handleViewportChange = () => {
      if (window.innerWidth >= 1440) {
        setSlide(2);
        return;
      }

      if (window.innerWidth < 1440) {
        setSlide(1);
        return;
      }
    };

    window.addEventListener('resize', handleViewportChange);

    return () => {
      window.removeEventListener('resize', handleViewportChange);
    };
  }, []);

  const CustomNextArrow = props => (
    <BtnArrowNext {...props}>
      <IconRight />
    </BtnArrowNext>
  );

  const CustomPrevArrow = props => (
    <BtnArrowPrev {...props}>
      <IconLeft />
    </BtnArrowPrev>
  );

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: slide,
    slidesToScroll: slide,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    currentSlide: slide,
  };

  const { t } = useTranslation();

  return (
    <ReviewsWrapper>
      <ul>
        <StyledSlider {...settings}>
          {reviews.map(review => (
            <li key={review.id}>
              <ReviewWrapper>
                <Img src={review.avatar} alt={review.name} />
                <Name>{review.name}</Name>
                <Review>{t(`reviews.${review.id}.review`)}</Review>
              </ReviewWrapper>
            </li>
          ))}
        </StyledSlider>
      </ul>
    </ReviewsWrapper>
  );
};
