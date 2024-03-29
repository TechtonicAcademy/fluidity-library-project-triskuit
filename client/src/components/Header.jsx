import { useRef, useEffect, useState } from 'react';

import { NavLink, Link, useHistory, useLocation } from 'react-router-dom';

function Header() {
  const [menuToggle, setMenuToggle] = useState(false);
  const head = useRef();
  const searchInput = useRef();
  const history = useHistory();
  const location = useLocation();

  const toggle = (bool) =>
    setMenuToggle((prev) => {
      if (bool === false || bool === true) return bool;
      return !prev;
    });

  const handleSearch = (event) => {
    event.preventDefault();
    history.push(`/bookshelf?q=${searchInput.current.value}`);
    toggle(false);
  };

  useEffect(() => {
    const outsideClick = (e) => {
      if (menuToggle && head.current && !head.current.contains(e.target)) {
        setMenuToggle(false);
      }
    };
    document.addEventListener('mousedown', outsideClick);
    return () => document.removeEventListener('mousedown', outsideClick);
  }, [menuToggle]);

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    searchInput.current.value = queryParams.get('q');
  }, [location]);

  return (
    <nav className="nav" ref={head}>
      <div className="nav__wrapper">
        <div className="nav__left">
          <Link to="/" className="nav__logo">
            The Library
          </Link>
        </div>
        <div className="nav__right">
          <ul
            className={`nav__links ${menuToggle ? 'nav__links--visible' : ''}`}
          >
            <li className="nav__li">
              <NavLink
                exact
                to="/"
                className="nav__link"
                activeClassName="nav__link--active"
                onClick={() => toggle(false)}
              >
                home
              </NavLink>
            </li>
            <li className="nav__li">
              <NavLink
                to="/bookshelf"
                className="nav__link"
                activeClassName="nav__link--active"
                onClick={() => toggle(false)}
              >
                bookshelf
              </NavLink>
            </li>
            <li className="nav__li">
              <NavLink
                to="/add"
                className="nav__link"
                activeClassName="nav__link--active"
                onClick={() => toggle(false)}
              >
                add book
              </NavLink>
            </li>
            <form action="#" className="nav__form" onSubmit={handleSearch}>
              <input
                type="text"
                placeholder="Search by Title/Author"
                className="nav__search"
                ref={searchInput}
              />
              <button className="nav__button" type="submit">
                <i className="fas fa-search" />
              </button>
            </form>
          </ul>
          <div
            className="nav__icon"
            onClick={toggle}
            onKeyDown={toggle}
            role="button"
            tabIndex={0}
          >
            <i className="fas fa-bars" />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
