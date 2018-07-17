import * as React from 'react';
import { IRow } from '../../Types/Types';
import './grid.css';
import { GridRow } from './GridRow/GridRow';

interface IProps {
    data: IRow[]
}

export class Grid extends React.Component<IProps, {}> {
    constructor(props: IProps) {
        super(props);
    }

    public sortChart(arr: IRow[]) {
        return arr.sort( (a, b) => {
            return a.hourOfDay - b.hourOfDay;
        })
    }

    public render() {
        const data = this.sortChart(this.props.data);

        return (
            <div className="grid">
                <div className="row-header">
                    <div className="col-2">Device</div>
                    <div className="col-2">Hour</div>
                    <div className="col-2">Clicks</div>
                    <div className="col-2">Conversions</div>
                    <div className="col-2">Avg CPC</div>
                    <div className="col-2">Avg Position</div>
                    <div className="col-2">Impressions</div>
                    <div className="col-2">Max Impressions</div>
                    <div className="col-2">Search Impression Share</div>
                    <div className="col-2">Cost</div>
                </div>
                {data.map((row, index) => 
                    <GridRow row={row} key={index} />
                )}
            </div>
        )
    }
}