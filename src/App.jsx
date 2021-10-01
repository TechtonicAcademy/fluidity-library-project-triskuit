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
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/add" component={AddBook} />
        <Route path="/book/:id/edit" component={EditBook} />
        <Route path="/bookshelf" component={Bookshelf} />
        <Route path="/book/:id" component={BookDetails} />
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
