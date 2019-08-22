import React from 'react';
import { connect } from 'react-redux';
import { fetchData } from '../../actions';

class PageHome extends React.Component {

    componentDidMount() {
        this.props.fetchData();
    }

    render() {

        console.log(this.props.moviePopular)

        const renderList = () => {
            return this.props.moviePopular.map( movie => {
                return (
                    <div key={movie.id}>
                        {movie.title}
                        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.original_title} />
                    </div>
                )
            });
        }

        return (
            <div>
                {renderList()}
            </div>
        )   
    }
}

const mapStateToProps = (state) => {
    return { moviePopular: state.moviePopular}
}


export default connect(mapStateToProps, {fetchData})(PageHome);