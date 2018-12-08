import React from "react";
import { connect } from "react-redux";
import DashboardMetricItem from './DashboardMetricItem';

const Dashboard = props => {
  return (
    !props.loading && props.metrics.map((metric, index) => {
      return (
        <DashboardMetricItem key={index} metric={metric} />
      )
    })
  );
};

const mapState = (state, ownProps) => {
  const { loading, metrics } = state.dashboardMetrics;
  return { loading, metrics };
};

export default connect(mapState)(Dashboard);
