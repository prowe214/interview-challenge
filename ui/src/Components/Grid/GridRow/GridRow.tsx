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
                <div className="col col-3 mobile-hide" title={row.device}>{row.device}</div>
                <div className="col col-1 number" title={row.hourOfDay.toString()}>{row.hourOfDay}</div>
                <div className="col col-2 number" title={row.clicks.toString()}>{row.clicks}</div>
                <div className="col col-2 number" title={row.conversions.toString()}>{row.conversions}</div>
                <div className="col col-2 number mobile-hide" title={row.avgPosition.toString()}>{row.avgPosition}</div>
                <div className="col col-2 number" title={row.impressions.toString()}>{row.impressions}</div>
                <div className="col col-2 number mobile-hide" title={row.maxImpressions.toString()}>{row.maxImpressions}</div>
                <div className="col col-2 number mobile-hide" title={row.searchImpressionShare.toString()}>{row.searchImpressionShare}</div>
                <div className="col col-2 number" title={row.cost.toLocaleString('USD')}>{row.cost.toLocaleString('USD')}</div>
                <div className="col col-2 number mobile-hide" title={row.avgCpc.toLocaleString('USD')}>{row.avgCpc.toLocaleString('USD')}</div>
            </div>
        )
    }
}