import { Link } from 'react-router-dom';

function LandingPage() {
  return (
    <>
      <section className="hero">
        <div className="hero__text">
          <div className="hero__title">Books.</div>
          <div className="hero__description">Read em &amp; weep</div>
        </div>
      </section>

      <section className="main">
        <h1>Welcome to the Library</h1>

        <p className="main__p">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Reprehenderit mollitia dolorem in adipisci obcaecati suscipit vel
          aliquam, dolor itaque velit?
        </p>

        <Link to="/bookshelf" className="main__link">
          See Books
        </Link>

        <p className="main__p">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione
          neque amet unde magnam. Excepturi quo deleniti quisquam ipsam est
          asperiores!
        </p>

        <Link to="/add" className="main__link">
          Add a Book
        </Link>
      </section>
    </>
  );
}

export default LandingPage;
