import { Link } from 'react-router-dom';
import BlackBoxThinking from '../styles/assets/images/books/black_box_thinking.jpeg';
import StatusAnxiety from '../styles/assets/images/books/status_anxiety.jpeg';
import WhyBuddhismIsTrue from '../styles/assets/images/books/why_buddhism_is_true.jpeg';
import Exhalation from '../styles/assets/images/books/exhalation.jpeg';

function Bookshelf() {
  return (
    <section className="library">
      <h1 className="library__title">Release the Kraken of Knowledge</h1>
      <div className="library__grid">
        <div className="card">
          <img
            src={BlackBoxThinking}
            className="card__image"
            alt="book cover"
          />
          <Link to="/details" className="card__title">
            Black Box Thinking
          </Link>
          <div className="card__author">Matthew Syed</div>
        </div>

        <div className="card">
          <img src={StatusAnxiety} className="card__image" alt="book cover" />
          <Link to="/details" className="card__title">
            Status Anxiety
          </Link>
          <div className="card__author">Alain de Botton</div>
        </div>

        <div className="card">
          <img
            src={WhyBuddhismIsTrue}
            className="card__image"
            alt="book cover"
          />
          <Link to="/details" className="card__title">
            Why Buddhism Is True
          </Link>
          <div className="card__author">Robert Wright</div>
        </div>

        <div className="card">
          <img src={Exhalation} className="card__image" alt="book cover" />
          <Link to="/details" className="card__title">
            Exhalation
          </Link>
          <div className="card__author">Ted Chiang</div>
        </div>

        <div className="card">
          <img
            src={BlackBoxThinking}
            className="card__image"
            alt="book cover"
          />
          <Link to="/details" className="card__title">
            Black Box Thinking
          </Link>
          <div className="card__author">Matthew Syed</div>
        </div>

        <div className="card">
          <img src={StatusAnxiety} className="card__image" alt="book cover" />
          <Link to="/details" className="card__title">
            Status Anxiety
          </Link>
          <div className="card__author">Alain de Botton</div>
        </div>

        <div className="card">
          <img
            src={WhyBuddhismIsTrue}
            className="card__image"
            alt="book cover"
          />
          <Link to="/details" className="card__title">
            Why Buddhism Is True
          </Link>
          <div className="card__author">Robert Wright</div>
        </div>

        <div className="card">
          <img src={Exhalation} className="card__image" alt="book cover" />
          <Link to="/details" className="card__title">
            Exhalation
          </Link>
          <div className="card__author">Ted Chiang</div>
        </div>

        <div className="card">
          <img
            src={BlackBoxThinking}
            className="card__image"
            alt="book cover"
          />
          <Link to="/details" className="card__title">
            Black Box Thinking
          </Link>
          <div className="card__author">Matthew Syed</div>
        </div>

        <div className="card">
          <img src={StatusAnxiety} className="card__image" alt="book cover" />
          <Link to="/details" className="card__title">
            Status Anxiety
          </Link>
          <div className="card__author">Alain de Botton</div>
        </div>

        <div className="card">
          <img
            src={WhyBuddhismIsTrue}
            className="card__image"
            alt="book cover"
          />
          <Link to="/details" className="card__title">
            Why Buddhism Is True
          </Link>
          <div className="card__author">Robert Wright</div>
        </div>

        <div className="card">
          <img src={Exhalation} className="card__image" alt="book cover" />
          <Link to="/details" className="card__title">
            Exhalation
          </Link>
          <div className="card__author">Ted Chiang</div>
        </div>
      </div>
    </section>
  );
}

export default Bookshelf;
