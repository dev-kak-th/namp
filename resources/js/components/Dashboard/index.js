import React, { Component } from "react";
import GlassTable from "../GlassTable";
import MachineTable from "../MachineTable";
import CardComponent from "../Card";

class DashboardContainer extends Component {
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
            <>
                <CardComponent />
                <MachineTable />
                <GlassTable />
            </>
        );
    }
}

export default DashboardContainer;
