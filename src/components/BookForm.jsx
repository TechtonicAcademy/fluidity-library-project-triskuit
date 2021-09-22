import { Link } from 'react-router-dom';
import Placeholder from '../styles/assets/images/books/placeholder_book_cover.jpeg';

function BookForm() {
  return (
    <form action="#" className="edit_form">
      <h1 className="edit_form__h1">Add Book</h1>
      <div className="edit_form__left">
        <div className="edit_form__input_block">
          <label htmlFor="title" className="edit_form__input_block">
            <span className="edit_form__label">Title</span>
            <input type="text" className="edit_form__input" name="title" />
          </label>
        </div>

        <label htmlFor="author" className="edit_form__input_block">
          <span className="edit_form__label">Author</span>
          <input type="text" className="edit_form__input" name="author" />
        </label>
      </div>

      <div className="edit_form__book_cover_wrapper">
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
          />
        </label>

        <label htmlFor="publish_date" className="edit_form__input_block">
          <span className="edit_form__label">Published</span>
          <input
            type="date"
            className="edit_form__input"
            name="published_date"
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
          />
        </label>

        <label htmlFor="stars" className="edit_form__input_block">
          <input type="hidden" name="stars" />
          <span className="edit_form__label">Rating</span>
          <span className="edit_form__stars">
            <i className="fa fa-star" aria-hidden="true" />
            <i className="fa fa-star" aria-hidden="true" />
            <i className="fa fa-star" aria-hidden="true" />
            <i className="far fa-star" aria-hidden="true" />
            <i className="far fa-star" aria-hidden="true" />
          </span>
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

export default BookForm;
