import React, { Component } from 'react';
import Create from '../Include/CRUD/create';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';

class CreateDish extends Component {
    constructor(props){
        super(props);
        this.state = {
            fields: [
                {
                    type : "text",
                    fields: [
                        "id", "dish_name", "classify_id", "logo", "menu_type", "category_type", "description"
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
    form: 'createDish', // a unique identifier for this form
})(connect(null, null)(CreateDish))