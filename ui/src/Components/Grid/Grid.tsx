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
                    <div className="col col-3 mobile-hide" title="Device">Device</div>
                    <div className="col col-1 number" title="Hour">Hour</div>
                    <div className="col col-2 number" title="Clicks">Clicks</div>
                    <div className="col col-2 number" title="Conversions">Conversions</div>
                    <div className="col col-2 number mobile-hide" title="Avg Position">Avg Position</div>
                    <div className="col col-2 number" title="Impressions">Impressions</div>
                    <div className="col col-2 number mobile-hide" title="Max Impressions">Max Impressions</div>
                    <div className="col col-2 number mobile-hide" title="Search Impression Share">Search Impression Share</div>
                    <div className="col col-2 number" title="Cost">Cost</div>
                    <div className="col col-2 number mobile-hide" title="Avg CPC">Avg CPC</div>
                </div>
                {data.map((row, index) => 
                    <GridRow row={row} key={index} />
                )}
            </div>
        )
    }
}