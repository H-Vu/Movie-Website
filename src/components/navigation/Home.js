import React from 'react';
import { connect } from 'react-redux';
import { fetchData } from '../../actions';
import Carousel from 'react-bootstrap/Carousel'


import HomeList from './insideHome/HomeList';

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
                            <HomeList movie={movie}/>
                        </div>
                )
            });
        }

        return (
            <div>
                <Carousel>
                    {renderList()}
                </Carousel>
            </div>
        )   
    }
}

const mapStateToProps = (state) => {
    return { moviePopular: state.moviePopular}
}


export default connect(mapStateToProps, {fetchData})(PageHome);