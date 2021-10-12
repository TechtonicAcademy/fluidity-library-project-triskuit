import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getBooks } from '../utils/API';
import Card from './subcomponents/Card';
import Loading from './subcomponents/Loading';

function Bookshelf() {
  const [books, setbooks] = useState();
  const location = useLocation();

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const query = queryParams.get('q');
    getBooks(query)
      .then(({ data }) => setbooks(data))
      // eslint-disable-next-line no-console
      .catch((err) => console.log(err));
  }, [location]);

  const mapBooks = (col) => {
    return col.map((book) => <Card book={book} key={book.id} />);
  };

  return (
    <section className="library">
      <h1 className="library__title">Release the Kraken of Knowledge</h1>
      <div className="library__grid">
        {books ? mapBooks(books) : <Loading />}
        {books && books.length === 0 && <Loading message="No Results" />}
      </div>
    </section>
  );
}

export default Bookshelf;
