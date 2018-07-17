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

    public render() {
        const { data } = this.props;

        return (
            <div className="grid">
                <div className="row-header">
                    <div className="col col-3">Device</div>
                    <div className="col col-1 number">Hour</div>
                    <div className="col col-2 number">Clicks</div>
                    <div className="col col-2 number">Conversions</div>
                    <div className="col col-2 number">Avg Position</div>
                    <div className="col col-2 number">Impressions</div>
                    <div className="col col-2 number">Max Impressions</div>
                    <div className="col col-2 number">Search Impression Share</div>
                    <div className="col col-2 number">Cost</div>
                    <div className="col col-2 number">Avg CPC</div>
                </div>
                {data.map((row, index) => 
                    <GridRow row={row} key={index} />
                )}
            </div>
        )
    }
}