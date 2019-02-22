import React, { Component } from 'react';
import { Card, CardBody, CardGroup, Col, Container, Row } from 'reactstrap';
import {
  Link
} from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import '../Login/login.css';
import { isEmailCheck } from '../../helpers/helper';
import { renderFields } from '../../helpers/fields';
import {
  loginAdmin, getPing, clearLogin
} from '../../actions/actions';
import { Button } from 'reactstrap';
import { Field, reduxForm } from 'redux-form';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';

class Login extends Component {

  
  onLoginSubmit = (values) => {
    this.props.clearLogin();
    this.props.loginAdmin(values);
    // this.props.history.push('/')
  }
  componentWillMount() {
    if (this.props.user.isLoggedIn) {
      this.props.history.push('/')
    }
  }

  componentWillReceiveProps(nextProps){
    if (nextProps.user.isLoggedIn) {
      nextProps.history.push('/')
    }
    if (nextProps.user.isLoggedIn === false && nextProps.user.isLoggedIn !== this.props.user.isLoggedIn) {
      toast.error("Invalid details")
    }
  }
  render() {
    console.log(this.props.user)
    const { handleSubmit, pristine, submitting } = this.props;
    return (
      <div className="login app flex-row align-items-center">
        <Container>
          <Row className="justify-content-center">
            <Col md="6">
              <CardGroup>
                <Card className="p-4">
                  <CardBody>
                    <form onSubmit={handleSubmit(this.onLoginSubmit.bind(this))}>
                      <h1>Login</h1>
                      <p className="text-muted">Sign In to your account</p>
                      <Field 
                          className="mb-3"
                          name="username" 
                          label="Username"
                          icon="icon-user"
                          component={renderFields} 
                          type="text" 
                          placeholder="Username" 
                      />
                       <Field 
                          className="mb-4"
                          name="password" 
                          label="Password"
                          icon="icon-lock"
                          component={renderFields} 
                          type="password" 
                          placeholder="Password" 
                      />
                       <Row>
                        <Col xs="6">
                          Need to register <Link to="/register">Click Here</Link>
                        </Col>
                      </Row>
                      <Row>
                        <Col xs="6">
                          <Button color="primary" type="submit" disabled={pristine || submitting} className="px-4">Login</Button>
                        </Col>
                      </Row>
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

function mapStateToProps(state) {
  const {
    user
  } = state
  return {
    user
  }
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    loginAdmin,
    getPing,
    clearLogin
  }, dispatch)
}

function validate(values){
  const errors= {};
  if(!values.username){
      errors.username = "Please enter your email address";        
  }
  else if(!isEmailCheck(values.username)){
    errors.username = "Please enter valid email address";        
  }
  if(!values.password){
      errors.password = "Please enter your password";        
  }
  return errors;
}

export default reduxForm({
  validate,
  form: 'login', // a unique identifier for this form
})(connect(mapStateToProps, mapDispatchToProps)(Login))