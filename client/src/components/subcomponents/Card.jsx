import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import placeHolderCover from '../../styles/assets/images/books/placeholder_book_cover.jpeg';

function Card(props) {
  const {
    book: {
      title,
      Author: { first_name: firstName, last_name: lastName },
      id,
      cover,
    },
  } = props;

  return (
    <Link to={`/book/${id}`} className="card">
      <img
        src={cover || placeHolderCover}
        className="card__image"
        alt="book cover"
      />
      <span className="card__title_wrapper">
        <span className="card__title">{title}</span>
      </span>
      <div className="card__author">
        {firstName} {lastName}
      </div>
    </Link>
  );
}

Card.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    cover: PropTypes.string,
    Author: PropTypes.shape({
      firstName: PropTypes.string,
      first_name: PropTypes.string,
      lastName: PropTypes.string,
      last_name: PropTypes.string,
    }).isRequired,
  }).isRequired,
};

export default Card;
