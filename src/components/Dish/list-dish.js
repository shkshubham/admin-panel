import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  listDish, showDish
} from '../../actions/actions';
import List from '../Include/CRUD/list';

class ListDish extends Component {
    constructor(props){
        super(props);
        this.state = {
            title: "",
            tableData: null,
        }
    }
    componentWillMount(){
        this.props.listDish()
    }
    componentWillReceiveProps(nextProps){
        // if(nextProps.dishes && nextProps.dishes !== this.props.dishes){
            this.setState({
                title: `Dish`,
                // tableData: nextProps.dish,
                tableData: [
                    {
                        id: 1,
                        name: "Biryani",
                        price: 25,
                        quantity: 20
                    }
                ],
            })
        // }
    }
    render() {
        const { title, tableData, type } = this.state;
        return (
            <div className="animated fadeIn">
                    {
                        tableData
                        ? 
                        <List 
                            onClickTable={this.onClickTable}
                            title={title}
                            tableData={tableData}
                            type={type}
                        /> : null
                    }
            </div>
        )
    }
}

function mapStateToProps(state) {
  const {
    dishes,
  } = state
  return {
    dishes,
  }
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    listDish,
    showDish
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ListDish);