import { useParams, useHistory } from 'react-router-dom';
import { useEffect, useState } from 'react';
import coverPlaceHolder from '../../styles/assets/images/books/placeholder_book_cover.jpeg';
import { getBook, deleteBook } from '../../utils/API';
import StarRating from '../subcomponents/StarRating';

function BookDetails() {
  const { id } = useParams();
  const history = useHistory();
  const [book, setBook] = useState({});

  useEffect(() => {
    getBook(id)
      .then(({ data }) => setBook(data))
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.log(err);
        history.push('/bookshelf');
      });
  }, []);

  const {
    title,
    author,
    date_published: datePublished,
    pages,
    rating,
    synopsis,
    cover
  } = book;

  const clickBookDelete = (bookID) =>
    deleteBook(bookID).then(history.push('/bookshelf'));

  return Object.keys(book).length !== 0 ? (
    <section className="details">
      <div className="details__title">{title}</div>
      <img
        src={cover || coverPlaceHolder}
        className="details__image"
        alt="book cover"
      />
      <div className="details__author">{author}</div>
      <div className="details__rating">
        <span className="details__label">Rating</span>
        <StarRating rating={rating} className="details__stars" viewOnly />
      </div>
      <span className="details__published">{datePublished}</span>
      <span className="details__pages">{pages}</span>
      <p className="details__summary">{synopsis}</p>

      <div className="details__links">
        <button
          type="button"
          className="main__link"
          onClick={() => history.push(`/book/${id}/edit`)}
        >
          Edit
        </button>
        <button
          type="button"
          className="main__link main__link--delete"
          onClick={() => clickBookDelete(id)}
        >
          Delete
        </button>
        <button
          type="button"
          className="main__link main__link--solid"
          onClick={() => history.push(`/bookshelf`)}
        >
          Back
        </button>
      </div>
    </section>
  ) : (
    <></>
  );
}

export default BookDetails;
