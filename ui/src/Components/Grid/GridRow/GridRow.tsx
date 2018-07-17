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
                <div className="col col-3">{row.device}</div>
                <div className="col col-1 number">{row.hourOfDay}</div>
                <div className="col col-2 number">{row.clicks}</div>
                <div className="col col-2 number">{row.conversions}</div>
                <div className="col col-2 number">{row.avgPosition}</div>
                <div className="col col-2 number">{row.impressions}</div>
                <div className="col col-2 number">{row.maxImpressions}</div>
                <div className="col col-2 number">{row.searchImpressionShare}</div>
                <div className="col col-2 number">{row.cost.toLocaleString('USD')}</div>
                <div className="col col-2 number">{row.avgCpc.toLocaleString('USD')}</div>
            </div>
        )
    }
}