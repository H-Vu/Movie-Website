import axios from '../apis/axios'


const KEY = "85114099e18b79dc356e1705b7bffa68";

export const fetchData = () => async (dispatch) => {
    //const KEY = "85114099e18b79dc356e1705b7bffa68";
    const response = await axios.get( '/discover/movie', {
        params: {
            api_key: KEY,
        }
    });

    dispatch({
        type: 'MOVIE_POPULAR',
        payload: response.data.results,
    })
};

export const fetchSearch = (formValue) => async (dispatch) => {
    const response = await axios.get( '/search/movie', {
        params: {
            api_key: KEY,
            query: formValue.searchBar,
        }
    });

    dispatch({
        type: 'MOVIE_SEARCH',
        payload: response.data.results,
    })
};