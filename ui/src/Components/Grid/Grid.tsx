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
                {data.map((row, index) => 
                    <GridRow row={row} key={index} />
                )}
            </div>
        )
    }
}