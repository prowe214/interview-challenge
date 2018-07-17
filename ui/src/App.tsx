import * as React from 'react';
import './App.css';
import { Chart } from './Components/Chart/Chart';
import { Grid } from './Components/Grid/Grid';
import { IColumns, IRow, IState } from './Types/Types';
import { toTitleCase } from './util/utils';

const dataUrl = 'http://localhost:3001/data';

class App extends React.Component<{}, IState> {
    constructor(props: {}) {
        super(props);

        this.state = {
            colsData: [],
            isLoaded: false,
            rowsData: [],
        }
    }

    /**
     * getColumns maps all fields and their values to respective hourOfDay so they may be
     * plotted on a line graph
     * 
     * @param rowsArray array of rows returned from data
     */
    public getColumns(rowsArray: IRow[]): IColumns[] {
        // If we wanted to plot all fields...
        // const allFields = Object.keys(rowsArray[0]);
        const visibleFields = [
            'clicks',
            'conversions',
            'impressions',
        ]

        const colsData: IColumns[] = visibleFields.map((field: string) => {
            const col: IColumns = {
                data: [],
                name: toTitleCase(field),
            };
            rowsArray.forEach((row: IRow) => {
                col.data.push(
                    [
                        row.hourOfDay,
                        row[field]
                    ]
                )
            })
            return col;
        })
        console.log(colsData)
        return colsData;
    }

    public componentDidMount() {
        fetch(dataUrl)
            .then( res => res.json() )
            .then( (result) => { 
                const columns = this.getColumns(result.rows);
                this.setState({
                    colsData: columns,
                    isLoaded: true,
                    rowsData: result.rows,
                }) 
            }, err => console.warn(err) )
    }

    public render() {
        const { colsData, isLoaded, rowsData } = this.state;

        if (!isLoaded) {
            return (
                <h1>Hey AdCellerant! Loading app...</h1>
            )
        } else {
            return (
                <div className="container">
                    <Chart data={colsData}/>
                    <Grid data={rowsData} />
                </div>
            )
        }
    }
}

export default App;
