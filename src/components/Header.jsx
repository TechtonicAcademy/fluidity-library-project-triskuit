import { NavLink, Link } from 'react-router-dom';

function Header() {
  return (
    <nav className="nav">
      <div className="nav__wrapper">
        <div className="nav__left">
          <Link to="/" className="nav__logo">
            The Library
          </Link>
        </div>
        <div className="nav__right">
          <ul className="nav__links">
            <li className="nav__li">
              <NavLink
                exact
                to="/"
                className="nav__link"
                activeClassName="nav__link--active"
              >
                home
              </NavLink>
            </li>
            <li className="nav__li">
              <NavLink
                to="/bookshelf"
                className="nav__link"
                activeClassName="nav__link--active"
              >
                bookshelf
              </NavLink>
            </li>
            <li className="nav__li">
              <NavLink
                to="/add"
                className="nav__link"
                activeClassName="nav__link--active"
              >
                add book
              </NavLink>
            </li>
            <form action="#" className="nav__form">
              <input
                type="text"
                placeholder="Search by Title/Author"
                className="nav__search"
              />
              <button className="nav__button" type="button">
                <i className="fas fa-search" />
              </button>
            </form>
          </ul>
          <div className="nav__icon">
            <i className="fas fa-bars" />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
