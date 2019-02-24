import React, { Component } from 'react';
import Create from '../Include/CRUD/create';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';

class CreateCuisine extends Component {
    constructor(props){
        super(props);
        this.state = {
            fields: [
                {
                    type : "text",
                    fields: [
                        "id", "cuisine_name"
                    ]
                }
            ]
        }
    }
    render() {
        return (
            <div className="animated fadeIn">
                <Create
                    fields={this.state.fields}
                 />
            </div>
        )
    }
}

export default reduxForm({
    // validate,
    form: 'createCuisine', // a unique identifier for this form
})(connect(null, null)(CreateCuisine))