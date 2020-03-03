import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import './App.css';
import Navbar from './components/Navbar';
import Vote from './components/Vote';
import VotesTabs from './components/VotesTabs';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <div className='App'>
          <Switch>
            <Route exact path='/' component={Vote} />
            <Route path='/votes' component={VotesTabs} />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
