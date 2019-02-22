import React, { Component } from 'react';
import { Card, CardBody, Col, Row, CardHeader, Table } from 'reactstrap';
class List extends Component {
    constructor(props){
        super(props);
        this.state = {
            keys: []
        }
    }

    componentWillMount(){
        const {
            tableData
        } = this.props;
        if(tableData.length > 0){
            const keys = Object.keys(tableData[0]);
            this.setState({
                keys
            })
        }
    }
    
    renderTableHeader = () => {
        const {
            keys
        } = this.state
        return keys.map((header, index)=> {
            return <th key={`${index}_${header}`}>{header}</th>
        })
    }

    renderTd = (data) => {
        const {
            keys
        } = this.state;
        return keys.map(key =>{
            return <td>{data[key]}</td>
        })
    } 
    renderBody = (tableData) => {
        if(tableData.length > 0){
            return tableData.map((data)=> {
                return (
                    <tr key={data.id}>
                        { this.renderTd(data)}
                        <td>
                            <span style={{
                                marginRight: 20
                            }} class="badge badge-success">Update</span>
                            <span class="badge badge-danger">Delete</span>
                        </td>
                    </tr>
                )
            })
        }
        else {
            return (
                <tr>
                    <td></td>
                    <td>No record found</td>
                </tr>
            )
        }
    }
    render() {
      const { 
          title,
          tableData
      } = this.props;
    return (
        <Row>
            <Col>
                <div className="create-header">
                    <Col xs={2}>
                            <button class="btn btn-primary btn-block">Create {title}</button>
                    </Col>
                </div>
            </Col>
            <Col xs="12" lg="12">
            <Card>
                <CardHeader>
                    { title }
                </CardHeader>
                <CardBody>
                    <Table responsive>
                        <thead>
                            <tr>
                                { this.renderTableHeader() }
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.renderBody(tableData)}
                        </tbody>
                    </Table>
                </CardBody>
            </Card>
        </Col>
    </Row>
    )
  }
}


export default List;