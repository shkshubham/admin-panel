import React, { Component } from 'react';
import { Card, CardBody, Col, Row, CardHeader, Table, Input } from 'reactstrap';
import { Link } from 'react-router-dom'; 
class List extends Component {
    constructor(props){
        super(props);
        this.state = {
            keys: [],
            deletedIds: [],
            searchItem: null,
            selectedOption: "id"
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

    renderSelectOptions = () => {
        const {
            keys
        } = this.state
        return keys.map((option, index)=> {
            return <option key={`${index}_${option}_select`}>{option}</option>
        })
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
            return <td key={key}>{data[key]}</td>
        })
    } 
    deleteItem = (id) => {
        const isDelete = window.confirm(`Do you want to delete ${id}`);
        if(isDelete){
            alert("Deleted");
        }
        this.setState({
            deletedIds: [...this.state.deletedIds, id]
        });
    }
    renderItem = (data) => {
        return (
            <tr key={data.id}>
                { this.renderTd(data)}
                <td>
                    <span style={{
                        marginRight: 20
                    }} className="badge badge-success">Update</span>
                    <span onClick={() => this.deleteItem(data.id)} className="badge badge-danger">Delete</span>
                </td>
            </tr>
        )
    }
    isDeleteCheck = (data) => {
        if(this.state.deletedIds.find(id => data.id)){
            return null;
        }
        else{
            return this.renderItem(data)
        }
    }
    renderBody = (tableData) => {
        const {
            searchItem,
            selectedOption
        } = this.state;
        if(tableData.length > 0){
            return tableData.map((data)=> {
                if(searchItem){
                    if(String(data[selectedOption]).toLowerCase().includes(searchItem.toLowerCase())){
                        return this.isDeleteCheck(data)
                    }
                } else {
                    return this.isDeleteCheck(data)
                }
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
    onChangeSearch = (e) => {
        this.setState({
            searchItem: e.target.value
        })
    }
    onChangeSearchSelect = (e) => {
        this.setState({
            selectedOption: e.target.value
        })
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
                            <Link to={`/${title.toLowerCase()}/create`} className="btn btn-primary btn-block">Create {title}</Link>
                    </Col>
                </div>
            </Col>
            <Col xs="12" lg="12">
            <Card>
                <CardHeader>
                    <Row>
                        <Col xs={6}>
                            { title }
                        </Col>
                        <Col xs={6}>
                            <Row>
                                <Col xs={6}>
                                    <Input onChange={(e) => this.onChangeSearchSelect(e)} type="select" name="select" id="selectSearch">
                                        {
                                            this.renderSelectOptions()
                                        }
                                    </Input>
                                </Col>
                                <Col xs={6}>
                                    <Input onChange={(e) => this.onChangeSearch(e)} style={{
                                        float: "right"
                                    }} type="text" placeholder="Search" />
                                </Col>
                            </Row>
                        </Col>
                    </Row>
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