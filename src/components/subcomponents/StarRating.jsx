import { Rating, RatingView } from 'react-simple-star-rating';
import PropTypes from 'prop-types';
import { useState } from 'react';

function StarRating(props) {
  const { rating, color, emptyColor, size, className, viewOnly, callBack } =
    props;
  const [stars, setStars] = useState(rating);

  const updateRating = (rate) => {
    callBack(rate);
    setStars(rate);
  };

  const svg = (
    <svg
      aria-hidden="true"
      focusable="false"
      data-prefix="fas"
      data-icon="star"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 576 512"
    >
      <path
        fill="currentColor"
        d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
      />
    </svg>
  );

  return viewOnly ? (
    <RatingView
      ratingValue={stars}
      fillColor={color}
      emptyColor={emptyColor}
      className={className}
      size={size}
    >
      {svg}
    </RatingView>
  ) : (
    <Rating
      ratingValue={stars}
      fillColor={color}
      emptyColor={emptyColor}
      className={className}
      size={size}
      onClick={updateRating}
    >
      {svg}
    </Rating>
  );
}

StarRating.propTypes = {
  rating: PropTypes.number,
  size: PropTypes.number,
  color: PropTypes.string,
  className: PropTypes.string,
  emptyColor: PropTypes.string,
  viewOnly: PropTypes.bool,
  callBack: PropTypes.func,
};

StarRating.defaultProps = {
  rating: 0,
  size: 20,
  color: 'black',
  emptyColor: 'lightgray',
  className: '',
  viewOnly: false,
  callBack: () => {},
};

export default StarRating;
