const movieSearch = (state = [], action) => {
    switch (action.type) {
        case 'MOVIE_SEARCH':
            return action.payload
        default: 
            return state
    }
}

export default movieSearch