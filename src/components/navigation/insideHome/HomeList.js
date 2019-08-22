import React from 'react';
import Carousel from 'react-bootstrap/Carousel'

const homeList = (props) => {
    return (
        <div>
            <img className="d-block w-70 mx-auto" height={650} src={`https://image.tmdb.org/t/p/w500${props.movie.poster_path}`} alt={props.movie.original_title} />
            <Carousel.Caption>
                {props.movie.original_title}
            </Carousel.Caption>   
        </div>
    );
};

export default homeList;