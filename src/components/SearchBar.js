import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { LinkContainer } from "react-router-bootstrap";

import { fetchSearch } from '../actions';

class SearchBar extends React.Component {

    onSubmit = (formValue) => {
        console.log(this.props)
        this.props.fetchSearch(formValue)
        
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
        return (
            <div>
                <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
                    <Field name="searchBar" component={this.renderInput} />
                    <button>Search</button>
                </form>
            </div>
        );
    };
}

const formWrap = reduxForm({
    form: 'searchBarForm'
})(SearchBar);

export default connect(null, {fetchSearch})(formWrap);