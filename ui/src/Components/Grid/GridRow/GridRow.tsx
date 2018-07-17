import * as React from 'react';
import { IRow } from '../../../Types/Types';
import './grid-row.css';

interface IProps {
    row: IRow
}

export class GridRow extends React.Component<IProps, {}> {
    constructor(props: IProps) {
        super(props);
    }

    public render() {
        const { row } = this.props

        return (
            <div className="row">
                <div className="col-2">{row.device}</div>
                <div className="col-2">{row.hourOfDay}</div>
                <div className="col-2">{row.clicks}</div>
                <div className="col-2">{row.conversions}</div>
                <div className="col-2">{row.avgCpc}</div>
                <div className="col-2">{row.avgPosition}</div>
                <div className="col-2">{row.impressions}</div>
                <div className="col-2">{row.maxImpressions}</div>
                <div className="col-2">{row.searchImpressionShare}</div>
                <div className="col-2">{row.cost}</div>
            </div>
        )
    }
}