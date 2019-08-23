import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import moviePopular from './moviePopular';
import movieSearch from './movieSearch'

export default combineReducers({
    moviePopular: moviePopular,
    movieSearch: movieSearch,
    form: formReducer,
});
 