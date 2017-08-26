'use strict';

import { combineReducers } from 'redux';
import inforReducer from './infoReducer';

const appReducers =  combineReducers({
  information: inforReducer,
});

export default appReducers;
