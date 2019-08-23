import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import moviePopular from './moviePopular';


export default combineReducers({
    moviePopular: moviePopular,
    form: formReducer,
});
