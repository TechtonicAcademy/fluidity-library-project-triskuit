import BookForm from './Form';
import { addBook as add } from '../../utils/API';

function AddBook() {
  const book = {
    id: null,
    title: '',
    Author: { first_name: '', last_name: '' },
    synopsis: '',
    date_published: '',
    pages: null,
    rating: 3,
    cover: '',
  };

  return (
    <div>
      <h1 className="edit_form__h1">Add Book</h1>
      <BookForm book={book} submitForm={add} />
    </div>
  );
}

export default AddBook;
