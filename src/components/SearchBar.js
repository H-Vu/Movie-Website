import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { LinkContainer } from "react-router-bootstrap";

import { fetchSearch } from '../actions';

class SearchBar extends React.Component {

    state = {
        redirect: false,
    }

    onSubmit = (formValue) => {
        console.log(this.props)
        this.props.fetchSearch(formValue)
        this.setState({redirect: true})
    }

    renderInput = (formProps) => {
        return (
            <div>
                <input {...formProps.input} />
            </div>
        )
    }

    render() {
       // console.log(this.props)
        if (!this.state.redirect) {
            return (
                <div>
                    <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
                        <Field name="searchBar" component={this.renderInput} />
                        <button>Search</button>
                    </form>
                </div>
            );
        } else {
            return (
                <Redirect to="/search" />
            )
        }
    };
}

const formWrap = reduxForm({
    form: 'searchBarForm'
})(SearchBar);

export default connect(null, {fetchSearch})(formWrap);