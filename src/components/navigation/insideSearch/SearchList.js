import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';

import "./SearchList.css";

const searchList = (props) => {
    return (
        <div style={{color: 'white'}}>
            <tbody>
                <tr>
                    <td>
                        <img className="" height={500} src={`https://image.tmdb.org/t/p/w500${props.movie.poster_path}`} alt={props.movie.original_title} />
                    </td>
                    <td>
                        
                            <Container>
                                <div className="title">
                                    {props.movie.original_title}
                                </div>
                                <p className="content">{props.movie.overview}</p>
                            </Container>
                        
                    </td>
                </tr>
            </tbody>
        </div>
    );
};

export default searchList;