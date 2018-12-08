import React from "react";

const tableStyle = {
    'display': 'inline-block',
    'padding': '1rem',
    'width': '370px',
    'fontFamily': '"Roboto", "Helvetica", "Arial", sans-serif'
}

const tableRowTitleStyle = {
    'fontWeight': '500'
}

const DashboardMetricItem = props => {
    const { metric } = props
    return (
        <table style={tableStyle}>
            <tbody>
                <tr>
                    <td style={tableRowTitleStyle}>Temperature:</td>
                    <td>{metric.metric}</td>
                </tr>
                <tr>
                    <td style={tableRowTitleStyle}>Latitude:</td>
                    <td>{metric.latitude}</td>
                </tr>
                <tr>
                    <td style={tableRowTitleStyle}>Longitude:</td>
                    <td>{metric.longitude}</td>
                </tr>
                <tr>
                    <td style={tableRowTitleStyle}>Last Received:</td>
                    <td>{metric.timestamp}</td>
                </tr>
            </tbody>
        </table>
    );
};

export default DashboardMetricItem;
