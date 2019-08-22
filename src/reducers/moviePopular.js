const moviePopular = (state = [], action) => {
    switch (action.type) {
        case 'MOVIE_POPULAR':
            return action.payload
        default: 
            return state
    }
}

export default moviePopular