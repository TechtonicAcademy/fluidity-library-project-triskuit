import { useState, useEffect } from 'react';
import { getBooks } from '../utils/API';
import Card from './Card';

function Bookshelf() {
  // function useQuery() {
  //   return new URLSearchParams(useLocation().search);
  // }

  // const query = useQuery();

  const [books, setbooks] = useState();

  useEffect(() => {
    getBooks()
      .then(({ data }) => setbooks(data))
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
