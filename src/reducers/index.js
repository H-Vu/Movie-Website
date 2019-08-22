import { combineReducers } from 'redux';
import moviePopular from './moviePopular';

export default combineReducers({
    moviePopular: moviePopular,
});
