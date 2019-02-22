import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

class privateRoute  extends Component {
    constructor(props){
        super(props);
        this.state = {
        }
    }
    render() {
        const {
            path,
            exact,
            name,
            component,
            location,
            user
        } = this.props
        // return (
        //     <div>
        //         {
        //             user.isLoggedIn
        //             ?
        //                 <Route path={path} exact={exact} name={name} component={component}
        //             />
        //             :
        //                 <Redirect to={{
        //                     pathname: "/login",
        //                     state: { from: location }
        //                 }} />
        //         }
        //     </div>
        // )
        return (
            <div>
                <Route path={path} exact={exact} name={name} component={component} />
            </div>
        )
    }
}

const mapStateToProps = state => {
    const {
        user
    } = state;
    return {
        user
    }
}
export default connect(mapStateToProps) (
    privateRoute
)