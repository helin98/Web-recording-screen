import { configureStore } from 'redux-starter-kit';
import { reducer } from './reducers';

const store = configureStore({
  reducer
});

export default store;
