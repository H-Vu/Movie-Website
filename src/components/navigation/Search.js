import React from 'react';
import { connect } from 'react-redux';

import SearchList from './insideSearch/SearchList'

class PageSearch extends React.Component {
    
    renderList = () => {
        return this.props.movieSearch.map( movie => {
            return (
                <div key={movie.id}>
                    <SearchList movie={movie}/>
                </div>
            )
        });
    }

    render() {
        //console.log(this.props.movieSearch)
        return (
            <div>
                {this.renderList()}
            </div>
        )
    }
    
}

const mapStateToProps = (state) => {
    return { movieSearch: state.movieSearch }
}

export default connect(mapStateToProps)(PageSearch);