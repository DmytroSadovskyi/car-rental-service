import { combineReducers } from 'redux';
import favoritesReducer from './favoriteSlice';

const rootReducer = combineReducers({
  favorites: favoritesReducer,
});

export default rootReducer;
