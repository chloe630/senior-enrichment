'use strict';
import React from 'react';
import {render} from 'react-dom';
import { Provider } from 'react-redux';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
// import axios from 'axios';

import store from './store';
import AllCampusesContainer from './components/AllCampusesContainer';
import AllStudentsContainer from './components/AllStudentsContainer';
import SingleCampusComponent from './components/SingleCampusComponent';
import SingleStudentComponent from './components/SingleStudentComponent';

render (
  <Provider store={store}>
    <Router >
      <Route path='/'>
        <Route path = '/campus' component = {AllCampusesContainer} >
        <IndexRoute component={AllCampusesContainer}/>
          <Route path = '/campus/:id' component = {SingleCampusComponent} />
        </Route>
        <Route path = '/student' component = {AllStudentsContainer} >
          <Route path = '/campus/:id' component = {SingleStudentComponent} />
        </Route>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('main')
);


