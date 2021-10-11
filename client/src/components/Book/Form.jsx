import { Link, useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useRef } from 'react';
import StarRating from '../subcomponents/StarRating';
import ImageSelect from '../subcomponents/ImageSelect';

function Form(props) {
  const {
    book: {
      title,
      Author: { first_name: firstName, last_name: lastName },
      synopsis,
      date_published: datePublished,
      pages,
      rating,
      cover,
    },
    submitForm,
  } = props;

  const history = useHistory();

  const inputTitle = useRef();
  const inputFirstName = useRef();
  const inputLastName = useRef();
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
      Author: {
        first_name: inputFirstName.current.value,
        last_name: inputLastName.current.value,
      },
      synopsis: inputSynopsis.current.value || null,
      date_published: inputPublished.current.value || null,
      pages: parseInt(inputPages.current.value, 10) || null,
      rating: parseInt(inputRating.current, 10) || null,
      cover: inputCover.current || null,
    };
    console.log(newBook);
    submitForm(newBook)
      .catch((err) => console.log(err))
      .then(() => history.push('/bookshelf'));
  };

  const setRating = (val) => {
    inputRating.current = val;
  };

  const setCover = (val) => {
    inputCover.current = val;
  };

  let today = new Date();
  today = today.toISOString().substring(0, 10);

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
        <div className="edit_form__input_block ">
          <span className="edit_form__label">Author</span>
          <div className="edit_form__input_block edit_form__input_block--double">
            <label
              htmlFor="firstName"
              className=" edit_form__input_block edit_form__input_block--half"
            >
              <span className="edit_form__label edit_form__label--hidden">
                First Name
              </span>
              <input
                placeholder="First"
                type="text"
                className="edit_form__input edit_form__input--first_name"
                name="firstName"
                autoComplete="off"
                defaultValue={firstName}
                ref={inputFirstName}
                required
              />
            </label>
            <label
              htmlFor="lastName"
              className="edit_form__input_block edit_form__input_block--half"
            >
              <span className="edit_form__label edit_form__label--hidden">
                Last Name
              </span>
              <input
                placeholder="Last"
                type="text"
                className="edit_form__input"
                name="lastName"
                autoComplete="off"
                defaultValue={lastName}
                ref={inputLastName}
                required
              />
            </label>
          </div>
        </div>
      </div>

      <ImageSelect cover={cover} setCover={setCover} />

      <div className="edit_form__left">
        <label htmlFor="synopsis" className="edit_form__input_block">
          <span className="edit_form__label">Synopsis</span>
          <textarea
            name="synopsis"
            className="edit_form__input"
            id=""
            cols="30"
            rows="10"
            maxLength="2000"
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
            max={today}
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
            min={0}
            max={2000}
            defaultValue={pages}
            ref={inputPages}
          />
        </label>

        <label htmlFor="stars" className="edit_form__input_block">
          {/* <input type="hidden" name="stars" value={rating} /> */}
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

Form.propTypes = {
  book: PropTypes.shape({
    title: PropTypes.string,
    Author: PropTypes.shape({
      firstName: PropTypes.string,
      first_name: PropTypes.string,
      lastName: PropTypes.string,
      last_name: PropTypes.string,
    }).isRequired,
    synopsis: PropTypes.string,
    datePublished: PropTypes.string,
    date_published: PropTypes.string,
    cover: PropTypes.string,
    pages: PropTypes.number,
    rating: PropTypes.number,
  }),
  submitForm: PropTypes.func.isRequired,
};

Form.defaultProps = {
  book: PropTypes.shape({
    title: '',
    Author: PropTypes.shape({
      firstName: '',
      first_name: '',
      lastName: '',
      last_name: '',
    }).isRequired,
    synopsis: '',
    datePublished: '',
    date_published: '',
    cover: '',
    pages: null,
    rating: 0,
  }),
};

export default Form;
