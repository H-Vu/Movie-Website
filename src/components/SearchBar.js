import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';

import { fetchSearch } from '../actions';

class SearchBar extends React.Component {

    onSubmit(formValue) {
        this.props.fetchSearch(formValue)
    }

    render() {

        const renderInput = () => {
            return (
                <div>
                    <input />
                    <button>Search</button>
                </div>
            )
        }

        return (
            <div>
                <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
                    <Field name="searchBar" component={renderInput} />
                </form>
            </div>
        );
    };
}

const formWrap = reduxForm({
    form: 'searchBarForm'
})(SearchBar);

export default connect(null, {fetchSearch})(formWrap);