import React from 'react';

const searchList = (props) => {
    return (
        <div style={{color: 'white'}}>
            <img className="" height={650} src={`https://image.tmdb.org/t/p/w500${props.movie.poster_path}`} alt={props.movie.original_title} />
            {props.movie.original_title}
        </div>
    );
};

export default searchList;