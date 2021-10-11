import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import LandingPage from './components/LandingPage';
import AddBook from './components/Book/Add';
import EditBook from './components/Book/Edit';
import Bookshelf from './components/Bookshelf';
import NotFound from './components/NotFound';
import Header from './components/Header';
import Footer from './components/Footer';
import View from './components/Book/View';

const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/add" component={AddBook} />
        <Route path="/book/:id/edit" component={EditBook} />
        <Route path="/bookshelf" component={Bookshelf} />
        <Route path="/book/:id" component={View} />
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
