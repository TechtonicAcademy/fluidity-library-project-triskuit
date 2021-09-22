import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import BookForm from './components/BookForm';
import Bookshelf from './components/Bookshelf';
import NotFound from './components/NotFound';
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <LandingPage />
          </Route>
          <Route exact path="/add">
            <BookForm />
          </Route>
          <Route exact path="/bookshelf">
            <Bookshelf />
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
};

export default App;
