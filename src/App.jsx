import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import LandingPage from './components/LandingPage';
import BookForm from './components/BookForm';
import Bookshelf from './components/Bookshelf';
import NotFound from './components/NotFound';
import Edit from './components/Edit';
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
            <BookForm />
          </Route>
          <Route path="/edit/:id">
            <Edit />
          </Route>
          <Route path="/bookshelf">
            <Bookshelf />
          </Route>
          <Route path="/details/:id">
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
