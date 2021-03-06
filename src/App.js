import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import axios from 'axios';

import './styles/App.css';
import Navbar from './components/Navbar';
import Vote from './components/Vote';
import VotesTabs from './components/VotesTabs';
import Favorites from './components/Favorites';
import store from './redux/store';
import AllImages from './components/AllImages';

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
            <Route path='/favorites' component={Favorites} />
            <Route path='/browse' component={AllImages} />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
