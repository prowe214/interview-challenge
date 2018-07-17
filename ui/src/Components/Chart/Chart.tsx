import * as Highcharts from 'highcharts';
import * as React from 'react';
import { IColumns } from '../../Types/Types';
import './chart.css';

interface IProps {
    data: IColumns[],
    subtitle: string
}

export class Chart extends React.Component<IProps, {}> {

    /**
     * Using Highcharts to render a 'Spline' chart -- a curvy multi-line chart
     * which can have irregular intervals.
     */
    public renderChart() {
        const { data } = this.props;

        // Binds chart to #chart-container element,
        // defines configuration
        Highcharts.chart('chart-container', {
            chart: {
                spacingBottom: 30,
                spacingRight: 50,
                spacingTop: 50,
                type: 'spline',
            },
            colors: ['#000', '#aaa', '#ff6600', '#036', '#000'],
            plotOptions: {
                spline: {
                    marker: {
                        enabled: true
                    }
                }
            },
            series: data,
            subtitle: {
                text: this.props.subtitle.toString(),
            },
            title: {
                text: 'Ad Campaign Performance On One Day'
            },
            xAxis: {
                title: {
                    text: 'Hour of Day'
                },
                type: 'number'
            },
            yAxis: {
                max: 220,
                min: 0,
                title: {
                    text: 'Value'
                },
            },
        })

    }

    public componentDidMount() {
        this.renderChart();
    }

    public render() {
        return (
            <div id="chart-container" />
        )
    }
}
