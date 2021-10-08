import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import BookForm from './Form';
import { getBook, editBook as edit } from '../../utils/API';

function EditBook() {
  const { id } = useParams();
  const [book, setbook] = useState({ title: '', author: '' });

  useEffect(() => {
    getBook(id)
      .then(({ data }) => setbook(data))
      // eslint-disable-next-line no-console
      .catch((err) => console.log(err));
  }, []);

  return book.title !== null ? (
    <div>
      <h1 className="edit_form__h1">Edit Book</h1>
      <BookForm book={book} submitForm={edit} />
    </div>
  ) : (
    <>Loading...</>
  );
}

export default EditBook;
