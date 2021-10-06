import { Link, useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useRef, useState } from 'react';
import Placeholder from '../../styles/assets/images/books/placeholder_book_cover.jpeg';
import StarRating from '../subcomponents/StarRating';

function BookForm(props) {
  const {
    book: {
      title,
      author,
      synopsis,
      date_published: datePublished,
      pages,
      rating,
      cover,
    },
    submitForm,
  } = props;

  const history = useHistory();
  const [starRating, setStarRating] = useState(rating);

  const inputTitle = useRef();
  const inputAuthor = useRef();
  const inputSynopsis = useRef();
  const inputPublished = useRef();
  const inputPages = useRef();
  const inputRating = useRef();
  const inputCover = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBook = {
      ...props.book,
      title: inputTitle.current.value,
      author: inputAuthor.current.value,
      synopsis: inputSynopsis.current.value,
      date_published: inputPublished.current.value,
      pages: parseInt(inputPages.current.value, 10),
      rating: parseInt(inputRating.current, 10),
      cover_url: inputCover.current.value,
    };
    submitForm(newBook);
    history.push('/bookshelf');
  };

  const setRating = (val) => {
    inputRating.current = val;
    setStarRating(val);
  };

  return (
    <form action="#" className="edit_form" onSubmit={handleSubmit}>
      <div className="edit_form__left">
        <div className="edit_form__input_block">
          <label htmlFor="title" className="edit_form__input_block">
            <span className="edit_form__label">Title</span>
            <input
              type="text"
              className="edit_form__input"
              name="title"
              defaultValue={title}
              autoComplete="off"
              ref={inputTitle}
              required
            />
          </label>
        </div>

        <label htmlFor="author" className="edit_form__input_block">
          <span className="edit_form__label">Author</span>
          <input
            type="text"
            className="edit_form__input"
            name="author"
            autoComplete="off"
            defaultValue={author}
            ref={inputAuthor}
            required
          />
        </label>
      </div>

      <div className="edit_form__book_cover_wrapper">
        <input type="hidden" name="cover" value={cover} ref={inputCover} />
        <img src={Placeholder} alt="Book cover" className="edit_form__image" />
        <button type="button" className="edit_form__btn">
          Change Image
        </button>
      </div>

      <div className="edit_form__left">
        <label htmlFor="synopsis" className="edit_form__input_block">
          <span className="edit_form__label">Synopsis</span>
          <textarea
            name="synopsis"
            className="edit_form__input"
            id=""
            cols="30"
            rows="10"
            defaultValue={synopsis}
            ref={inputSynopsis}
          />
        </label>

        <label htmlFor="publish_date" className="edit_form__input_block">
          <span className="edit_form__label">Published</span>
          <input
            type="date"
            className="edit_form__input"
            name="published_date"
            defaultValue={datePublished}
            ref={inputPublished}
          />
        </label>

        <label htmlFor="pages" className="edit_form__input_block">
          <span className="edit_form__label">Pages</span>
          <input
            type="number"
            className="edit_form__input"
            name="pages"
            min={1}
            max={2000}
            defaultValue={pages}
            ref={inputPages}
          />
        </label>

        <label htmlFor="stars" className="edit_form__input_block">
          <input type="hidden" name="stars" value={starRating} />
          <span className="edit_form__label">Rating</span>
          <StarRating
            rating={rating}
            className="edit_form__stars"
            callBack={setRating}
          />
        </label>
      </div>

      <div className="edit_form__btns">
        <button type="submit" className="edit_form__btn edit_form__btn--submit">
          Submit
        </button>
        <Link to="/bookshelf" className="edit_form__btn">
          Cancel
        </Link>
      </div>
    </form>
  );
}

BookForm.propTypes = {
  book: PropTypes.shape({
    title: PropTypes.string,
    author: PropTypes.string,
    synopsis: PropTypes.string,
    datePublished: PropTypes.string,
    date_published: PropTypes.string,
    cover: PropTypes.string,
    pages: PropTypes.number,
    rating: PropTypes.number,
  }),
  submitForm: PropTypes.func.isRequired,
};

BookForm.defaultProps = {
  book: PropTypes.shape({
    title: null,
    author: null,
    synopsis: null,
    datePublished: null,
    date_published: null,
    cover: null,
    pages: 0,
    rating: 0,
  }),
};

export default BookForm;
