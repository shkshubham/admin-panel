import React, { Component } from 'react';
import Create from '../Include/CRUD/create';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { bindActionCreators } from 'redux';
import { dishActions } from '../../actions/actions';

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
    onSubmitForm = (values) => {
        this.props.addDish(values);
        this.props.history.push("/dish");
    }
    render() {
        const {
            handleSubmit
        } = this.props;
        
        return (
            <div className="animated fadeIn">
                <Create
                    fields={this.state.fields}
                    onSubmit={this.onSubmitForm}
                    handleSubmit={handleSubmit}
                 />
            </div>
        )
    }
}

function mapStateToProps(state) {
    const {
        dishAdded
    } = state
    return {
        dishAdded
    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        addDish: dishActions.addAction
    }, dispatch)
}
  

export default reduxForm({
    // validate,
    form: 'createDish', // a unique identifier for this form
})(connect(mapStateToProps, mapDispatchToProps)(CreateDish))