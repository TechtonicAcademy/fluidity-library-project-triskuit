import Ratings from 'react-ratings-declarative';
import PropTypes from 'prop-types';

function StarRating(props) {
  const starSVG =
    'M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z';
  const { rating, color, emptyColor, starWidth, starSpacing, className } =
    props;
  return (
    <>
      <Ratings
        className={className}
        rating={rating}
        name="rating"
        svgIconPaths={starSVG}
        svgIconViewBoxes="0 0 576 512"
        widgetRatedColors={color}
        widgetDimensions={`${starWidth}px`}
        widgetSpacings={`${starSpacing}px`}
        widgetEmptyColors={emptyColor}
      >
        <Ratings.Widget />
        <Ratings.Widget />
        <Ratings.Widget />
        <Ratings.Widget />
        <Ratings.Widget />
      </Ratings>
    </>
  );
}

StarRating.propTypes = {
  rating: PropTypes.number,
  starWidth: PropTypes.number,
  starSpacing: PropTypes.number,
  color: PropTypes.string,
  className: PropTypes.string,
  emptyColor: PropTypes.string,
};

StarRating.defaultProps = {
  rating: 0,
  starWidth: 20,
  starSpacing: 1,
  color: 'black',
  emptyColor: 'lightgray',
  className: '',
};

export default StarRating;
