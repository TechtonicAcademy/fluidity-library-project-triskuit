import BookForm from './Form';
import { addBook as add } from '../../utils/API';

function AddBook() {
  const book = {
    id: null,
    title: null,
    author: null,
    synopsis: null,
    published: null,
    pages: null,
    rating: null,
    cover: null,
  };

  return (
    <div>
      <h1 className="edit_form__h1">Add Book</h1>
      <BookForm book={book} submitForm={add} />
    </div>
  );
}

export default AddBook;
