import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getBooks } from '../utils/API';
import Card from './subcomponents/Card';

function Bookshelf() {
  const [books, setbooks] = useState();
  const location = useLocation();

  const searchFilter = (data, searchTerm) => {
    if (!searchTerm) return { data };
    const re = new RegExp(searchTerm, 'i');
    const output = data.filter(
      (obj) => obj.title.match(re) || obj.author.match(re)
    );
    return { data: output };
  };

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const query = queryParams.get('q');
    getBooks()
      .then(({ data }) => searchFilter(data, query))
      .then(({ data }) => setbooks(data))
      // eslint-disable-next-line no-console
      .catch((err) => console.log(err));
  }, [location]);

  return (
    <section className="library">
      <h1 className="library__title">Release the Kraken of Knowledge</h1>
      <div className="library__grid">
        {books
          ? books.map((book) => <Card book={book} key={book.id} />)
          : 'loading'}
        {books && books.length === 0 ? 'No Results' : ''}
      </div>
    </section>
  );
}

export default Bookshelf;
