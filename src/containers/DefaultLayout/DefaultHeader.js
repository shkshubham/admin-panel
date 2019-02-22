import React, { Component } from 'react';
import { DropdownItem, DropdownMenu, DropdownToggle, Nav } from 'reactstrap';
import PropTypes from 'prop-types';

import { AppAsideToggler, AppHeaderDropdown, AppNavbarBrand, AppSidebarToggler } from '@coreui/react';
import logo from '../../assets/img/logo.png'
import sygnet from '../../assets/img/brand/sygnet.svg'
import '../DefaultLayout/DefultLayout.css';
import { logoutAdmin } from '../../actions/AuthAction';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';

const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {};

class DefaultHeader extends Component {

  logout = () => {
    this.props.logoutAdmin();
  }

  render() {

    // eslint-disable-next-line
    const { children, ...attributes } = this.props;

    return (
      <React.Fragment>
        <AppSidebarToggler className="d-lg-none" display="md" mobile />
        {/* <AppNavbarBrand
          full={{ src: logo, width: 89, height: 25, alt: 'Logo' }}
          minimized={{ src: sygnet, width: 30, height: 30, alt: 'Logo' }}
        /> */}
        <AppSidebarToggler className="d-md-down-none" display="lg" />
        <Nav className="ml-auto" navbar>
          <AppHeaderDropdown direction="down">
            <DropdownToggle nav>
              Admin
            </DropdownToggle>
            <DropdownMenu right style={{ right: 'auto' }}>
              {/* <DropdownItem><i className="fa fa-bell-o"></i> Profile</DropdownItem> */}
              <DropdownItem><i className="fa fa-lock"></i> Logout</DropdownItem>
            </DropdownMenu>
          </AppHeaderDropdown>
        </Nav>
        {/* <AppAsideToggler className="d-md-down-none" /> */}
        {/*<AppAsideToggler className="d-lg-none" mobile />*/}
      </React.Fragment>
    );
  }
}

DefaultHeader.propTypes = propTypes;
DefaultHeader.defaultProps = defaultProps;

function mapStateToProps(state) {

}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    // logoutAdmin
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(DefaultHeader)
