import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import LandingPage from './components/LandingPage';
import AddBook from './components/AddBook';
import EditBook from './components/EditBook';
import Bookshelf from './components/Bookshelf';
import NotFound from './components/NotFound';
import Header from './components/Header';
import Footer from './components/Footer';
import BookDetails from './components/BookDetails';

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <LandingPage />
          </Route>
          <Route path="/add">
            <AddBook />
          </Route>
          <Route path="/book/:id/edit">
            <EditBook />
          </Route>
          <Route path="/bookshelf">
            <Bookshelf />
          </Route>
          <Route path="/book/:id">
            <BookDetails />
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
