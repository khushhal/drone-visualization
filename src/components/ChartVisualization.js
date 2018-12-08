import React from "react";
import Chart from "react-google-charts";
import { connect } from "react-redux";

function getTimeString(unix_timestamp) {
    var date = new Date(unix_timestamp * 1000);
    var hours = date.getHours();
    var minutes = "0" + date.getMinutes();
    return hours + ':' + minutes.substr(-2);
}

const columns = [
    {
        type: "string",
        label: "Time"
    },
    {
        type: "number",
        label: "Temperature"
    }
];

const areaChartConfig = {
    crosshair: {
        trigger: "both",
        orientation: "vertical"
    },
    selectionMode: "multiple",
    focusTarget: "category",
    legend: { position: "none" },
    chartArea: {
        width: "100%",
        height: "90%",
        left: 30,
        right: 30,
        top: 30,
        bottom: 30
    },
    hAxis: {
        title: "",
        textStyle: { color: "#757575", fontSize: 12 },
        titleTextStyle: {
            color: "#424242",
            fontSize: 14,
            italic: false,
            bold: false
        },
    },
    vAxis: {
        title: "",
        baselineColor: "transparent",
        textStyle: { color: "#757575", fontSize: 12 },
        titleTextStyle: {
            color: "#424242",
            fontSize: 14,
            italic: false,
            bold: false
        },
    }
};

const ChartVisualization = props => {

    function getChartRows(metrics) {
        return metrics.map(metric => { return [getTimeString(metric.timestamp), metric.metric] });
    }

    return (
        <div>
            <Chart
                chartType="AreaChart"
                width="100%"
                height="400px"
                options={areaChartConfig}
                rows={getChartRows(props.metrics)}
                columns={columns}
            />
        </div>
    );
};

const mapState = (state, ownProps) => {
    const { loading, metrics } = state.dashboardMetrics;
    return { loading, metrics };
};

export default connect(mapState)(ChartVisualization);

