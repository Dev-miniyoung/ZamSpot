import { combineReducers, createStore } from 'redux';

import { registerPlaceReducer } from './registerPlace';

const rootReducer = combineReducers({
  registerPlace: registerPlaceReducer,
});

const store = createStore(rootReducer);

export default store;
