import React, { Component } from 'react';
import { Card, CardBody, CardGroup, Col, Container, Row, InputGroup } from 'reactstrap';
import { Button } from 'reactstrap';
import { Field, reduxForm } from 'redux-form';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { CapitalFirstLetter } from '../../../helpers/helper';

class Create extends Component {
    renderFields = (field) => {
        return(
            <div>
            <InputGroup className={field.className}>
                <input {...field.input}
                    type={field.type}
                    placeholder={field.placeholder}
                    />
    
            </InputGroup>
                <Col style={{
                    padding: 0
                }} xs={12} className="error">
                    <span>{field.meta.touched ? field.meta.error : ''} </span>
                </Col>
            </div>
        )
    }

    renderTextFields = (type, fields) => {
        return fields.map(field => {
            const caps = CapitalFirstLetter(field).split("_").join(" ")
            return (
                <Field 
                    className="mb-3 col-4"
                    name={caps} 
                    label={field}
                    component={this.renderFields} 
                    type={type} 
                    placeholder={`Enter ${caps}`} 
                />
            )
        })
    }

    renderAllField = () => {
        return this.props.fields.map(({ type, fields }) => {
            switch (type) {
                case "text":
                    return this.renderTextFields(type, fields)
                default:
                    break;
            }
        })
    }

    render() {
        const {
            title
        } = this.props;
        return (
        <div className="create-section flex-row align-items-center">
            <Container>
            <Row className="justify-content-center">
                <Col md="12">
                <CardGroup>
                    <Card className="p-4">
                    <CardBody>
                        <form onSubmit={this.props.onSubmit}>
                        <h1>{title}</h1>
                        {
                            this.renderAllField()
                        }
                            <Col xs="6">
                            <Button color="primary" type="submit" className="px-4">Submit</Button>
                            </Col>
                        </form>
                    </CardBody>
                    </Card>
                </CardGroup>
                </Col>
            </Row>
            <ToastContainer
                position="bottom-left"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnVisibilityChange
                draggable
                pauseOnHover
            />
            </Container>
        </div>
        );
    }
}

export default Create;