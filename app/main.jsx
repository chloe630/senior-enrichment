'use strict';
import React from 'react';
import {render} from 'react-dom';
import { Provider } from 'react-redux';
import {Router, Route, IndexRoute, hashHistory, onEnter} from 'react-router';
import axios from 'axios';

import store from './store';
import AllCampusesContainer from './components/AllCampusesContainer';
import AllStudentsContainer from './components/AllStudentsContainer';
import SingleCampusContainer from './components/SingleCampusContainer';
import SingleStudentContainer from './components/SingleStudentContainer';
import { getCampusFromServer, getSingleCampusFromServer } from './actionCreator/campuses';
import { getStudentsFromServer, getSingleStudentFromServer } from './actionCreator/students';


const onCampusesEnter = () => {
  store.dispatch(getCampusFromServer());
};
const onSingleCampusEnter = (nextRouterParams) => {
  store.dispatch(getSingleCampusFromServer(nextRouterParams.params.id));
};
const onStudentsEnter = () => {
  store.dispatch(getStudentsFromServer());
};
const onSingleStudentEnter = (nextRouterParams) => {
  store.dispatch(getSingleStudentFromServer(nextRouterParams.params.id));
};

render (
  <Provider store={store}>
    <Router history = {hashHistory} >
      <Route path='/'>
        <Route path = '/campus' component = {AllCampusesContainer}
               onEnter = { onCampusesEnter }>
          <IndexRoute component={AllCampusesContainer}
                      onEnter = { onCampusesEnter }/>
          <Route path = '/campus/:id' component = {SingleCampusContainer}
                 onEnter = { onSingleCampusEnter }/>
        </Route>
        <Route path = '/student' component = {AllStudentsContainer}
               onEnter = { onStudentsEnter }>
          <Route path = '/student/:id' component = {SingleStudentContainer}
                 onEnter = { onSingleStudentEnter }/>
        </Route>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('main')
);

