import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Layout } from "antd";

import UserContainer from "../User/UserContainer";

class ContentRoute extends Component {
    state = {
        collapsed: false
    };

    toggleCollapsed = () => {
        this.setState({
            collapsed: !this.state.collapsed
        });
    };

    render() {
        return (
            <Router>
                <Route path="/dashboard">
                    <UserContainer />
                </Route>
                <Route path="/user">User</Route>
                <Route path="/water">Water</Route>
            </Router>
        );
    }
}

export default ContentRoute;
