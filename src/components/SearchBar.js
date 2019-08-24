import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';
import Form from 'react-bootstrap/Form';

import { fetchSearch } from '../actions';

class SearchBar extends React.Component {

    state = {
        redirect: false,
    }

    onSubmit = (formValue) => {
        this.props.fetchSearch(formValue)
        this.setState({redirect: true})
        
    }

    renderInput = (formProps) => {
        return (
            <div>
                <FormControl type="text" placeholder="I know everything" className="mr-sm-2" {...formProps.input} />
            </div>
        )
    }

    render() { 
        //console.log(this.props)
        if (!this.state.redirect) {
            return (
                <div>
                    <Form inline onSubmit={this.props.handleSubmit(this.onSubmit)}>
                        <Field name="searchBar" component={this.renderInput} />
                        <Button variant="dark" type="submit">Search</Button>
                    </Form>
                </div>
            );
        } else {
            return (
                <div>
                    <div>
                        <Form inline onSubmit={this.props.handleSubmit(this.onSubmit)}>
                            <Field name="searchBar" component={this.renderInput} />
                            <Button variant="dark" type="submit">Search</Button>
                        </Form>
                    </div>
                    <Redirect to="/search" />
                    {this.setState({redirect: false})}
                </div>
                
            )
        }
    };
}

const formWrap = reduxForm({
    form: 'searchBarForm'
})(SearchBar);

export default connect(null, {fetchSearch})(formWrap);