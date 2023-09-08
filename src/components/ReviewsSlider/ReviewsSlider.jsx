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
} from './ReviewsSlider.styled';
import { useEffect, useState } from 'react';
import 'slick-carousel/slick/slick.css';

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

  return (
    <ReviewsWrapper>
      <ul>
        <StyledSlider {...settings}>
          {reviews.map(review => (
            <li key={review.id}>
              <ReviewWrapper>
                <div>
                  <Name>{review.name}</Name>
                  <Review>{review.review}</Review>
                </div>
              </ReviewWrapper>
            </li>
          ))}
        </StyledSlider>
      </ul>
    </ReviewsWrapper>
  );
};
