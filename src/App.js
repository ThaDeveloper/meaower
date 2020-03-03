import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import axios from 'axios';

import './App.css';
import Navbar from './components/Navbar';
import Vote from './components/Vote';
import VotesTabs from './components/VotesTabs';
import store from './redux/store';

const apiKey = 'd3cd1032-2080-4458-91f3-007d2a53a528';
axios.defaults.headers = {
  'Content-Type': 'application/json',
  'x-api-key': apiKey
};

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
