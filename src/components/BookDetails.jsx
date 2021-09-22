import { Link } from 'react-router-dom';
import BlackBoxThinking from '../styles/assets/images/books/black_box_thinking.jpeg';

function BookDetails() {
  return (
    <section className="details">
      <div className="details__title">Black Box Thinking</div>
      <img src={BlackBoxThinking} className="details__image" alt="book cover" />
      <div className="details__author">Matthew Syed</div>
      <div className="details__rating">
        <span className="details__label">Rating</span>
        <span className="details__stars">
          <i className="fa fa-star" aria-hidden="true" />
          <i className="fa fa-star" aria-hidden="true" />
          <i className="fa fa-star" aria-hidden="true" />
          <i className="fa fa-star" aria-hidden="true" />
          <i className="far fa-star" aria-hidden="true" />
        </span>
      </div>
      <span className="details__published">Published: June 1st, 1975</span>
      <span className="details__pages">300 pages</span>
      <p className="details__summary">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat eius
        voluptate maiores similique accusamus minima libero corrupti cum ea
        dolore iusto voluptatem, culpa eum iste dolores omnis sed ipsum
        recusandae possimus perspiciatis doloremque ad. Autem, pariatur atque.
        Harum fugiat sit repudiandae, nesciunt nam accusamus! Saepe explicabo
        necessitatibus iusto unde asperiores ipsam illo excepturi blanditiis,
        sequi at suscipit error, vitae facere laboriosam. Ab, temporibus
        aspernatur. Nesciunt minus praesentium modi incidunt neque, illo quo
        possimus ipsa mollitia aperiam quis natus repudiandae ducimus non
        corrupti eligendi blanditiis amet minima itaque debitis cupiditate eius.
        Magnam quis sunt optio nemo quas quam totam doloremque possimus!
      </p>

      <div className="details__links">
        <Link to="/edit" className="main__link">
          Edit This Book
        </Link>
        <Link to="/bookshelf" className="main__link main__link--solid">
          Back to Shelf
        </Link>
      </div>
    </section>
  );
}

export default BookDetails;
