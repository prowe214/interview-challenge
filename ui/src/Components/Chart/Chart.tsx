import * as Highcharts from 'highcharts';
import * as React from 'react';
import { IColumns } from '../../Types/Types';

interface IProps {
    data: IColumns[]
}

export class Chart extends React.Component<IProps, {}> {

    public renderChart() {
        const { data } = this.props;

        Highcharts.chart('chart-container', {
            chart: {
                type: 'spline'
            },
            colors: ['#6CF', '#39F', '#06C', '#036', '#000'],
            plotOptions: {
                spline: {
                    marker: {
                        enabled: true
                    }
                }
            },
            series: data,
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
