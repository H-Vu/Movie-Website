import axios from '../apis/axios'

export const fetchData = () => async (dispatch) => {
    const KEY = "85114099e18b79dc356e1705b7bffa68";
    const response = await axios.get('/discover/movie', {
        params: {
            api_key: KEY,
        }
    });

    dispatch({
        type: 'MOVIE_POPULAR',
        payload: response.data.results,
    })
};