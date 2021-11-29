// // Creates a Redux store that holds the state of the app. Only one store should exist.
// import { createStore } from 'redux';

// // Importing the reducer file that is mostly unchanged
// import reducer from './reducers';

// const store = createStore(reducer);
// export default store;
import { createStore } from 'redux';
import reducers from './reducers';

export default createStore(reducers);