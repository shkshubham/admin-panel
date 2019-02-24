import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import List from '../Include/CRUD/list';

class ListDish extends Component {
    constructor(props){
        super(props);
        this.state = {
            title: "Cuisine",
            tableData: [
                {
                    id: 1,
                    name: "North Indian",
                    price: 25,
                    quantity: 20
                }
            ]
        }
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
  } = state
  return {
  }
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ListDish);