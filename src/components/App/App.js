import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, withRouter } from 'react-router-dom';
// Styles
// CoreUI Icons Set
import '@coreui/icons/css/coreui-icons.min.css';
// Import Flag Icons Set
import 'flag-icon-css/css/flag-icon.min.css';
// Import Font Awesome Icons Set
import 'font-awesome/css/font-awesome.min.css';
// Import Simple Line Icons Set
import 'simple-line-icons/css/simple-line-icons.css';
// Import Main styles for this application
import '../../scss/style.scss'


// Containers
// import { DefaultLayout } from './containers';
// Pages
import Login from '../Login/Login';
import DefaultLayout from '../../containers/DefaultLayout/DefaultLayout';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  getPing
} from '../../actions/actions';
import './App.scss';

class App extends Component {

  componentWillMount() {
    this.props.getPing();
  }

  componentWillReceiveProps(nextProps){
    if (this.props.user.isLoggedIn !== nextProps.user.isLoggedIn) {
      this.props.history.push('/')
    }
  }
  render() {
    if(this.props.user.isPingLoaded || this.props.user.isLoggedIn){
      return (
        <BrowserRouter>
          <Switch>
            <Route exact path="/login" name="Login" component={Login} />
            <Route path="/" name="Admin" component={DefaultLayout} />
          </Switch>
        </BrowserRouter>
      );
    }
    else{
      return (
        <div>Loading..</div>
      )
    }
  }
}

function mapStateToProps(state) {
  const {
    user
  } = state;
  return {
    user
  }
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    getPing
  }, dispatch)
}
export default connect(mapStateToProps,mapDispatchToProps)(App);