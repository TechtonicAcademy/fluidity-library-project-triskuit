import { useState, useEffect } from 'react';
import { getBooks } from '../utils/API';
import Card from './subcomponents/Card';

function Bookshelf() {
  const [books, setbooks] = useState();

  useEffect(() => {
    getBooks()
      .then(({ data }) => setbooks(data))
      // eslint-disable-next-line no-console
      .catch((err) => console.log(err));
  }, []);

  return (
    <section className="library">
      <h1 className="library__title">Release the Kraken of Knowledge</h1>
      <div className="library__grid">
        {books
          ? books.map((book) => <Card book={book} key={book.id} />)
          : 'loading'}
      </div>
    </section>
  );
}

export default Bookshelf;
