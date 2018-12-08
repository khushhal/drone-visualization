import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../store/actions";
import Card from "@material-ui/core/Card";
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { withStyles } from "@material-ui/core/styles";

import Dashboard from './Dashboard';
import ChartVisualization from './ChartVisualization';

const styles = {
  card: {
    margin: "5% 5%"
  }
};

class NowWhat extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 0
    }
  }

  componentWillMount() {
    this.props.onLoad();
  }

  handleTabChange = (event, value) => {
    this.setState({ selectedTab: value });
  }

  render() {
    const { classes } = this.props;
    const tabContent = {
      0: <Dashboard />,
      1: <ChartVisualization />
    }
    return (
      <Card className={classes.card}>
        <Tabs value={this.state.selectedTab} onChange={this.handleTabChange}>
          <Tab label="Dashboard Visualization" />
          <Tab label="Chart Visualization" />
        </Tabs>
        <div style={{ padding: '1rem' }}>
          {tabContent[this.state.selectedTab]}
        </div>
      </Card>
    );
  }
};

const mapDispatch = dispatch => ({
  onLoad: () => dispatch({ type: actions.FETCH_METRICS }),
});

export default connect(null, mapDispatch)(withStyles(styles)((NowWhat)));
