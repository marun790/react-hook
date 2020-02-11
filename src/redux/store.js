import { bakaryReducer } from './bakary/bakaryReducer';
import { createStore } from 'redux';

const store = createStore(bakaryReducer);

export default store;
