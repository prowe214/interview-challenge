import * as React from 'react';
import './App.css';
import { Chart } from './Components/Chart/Chart';
import { Grid } from './Components/Grid/Grid';
import { IColumns, IRow, IState } from './Types/Types';
import { sortByHour, toTitleCase } from './util/utils';

const dataUrl = 'http://localhost:3001/data';

class App extends React.Component<{}, IState> {
    constructor(props: {}) {
        super(props);

        this.state = {
            colsData: [],
            date: '',
            isLoaded: false,
            rowsData: [],
        }
    }

    /**
     * getColumns maps all fields and their values to respective hourOfDay so they may be
     * plotted accurately on a line graph
     * 
     * @param rowsArray array of rows returned from db
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
            col.data = rowsArray.map((row: IRow) => {
                return (
                    [
                        row.hourOfDay,
                        row[field]
                    ]
                )
            })

            return col;
        })
        return colsData;
    }

    /**
     * Only one object in the array has a date associated with it.
     * getDate finds and returns that date 
     * 
     * @param rowsArray array of rows returned from db
     */
    public getDate(rowsArray: IRow[]) {
        let date = '';
        rowsArray.forEach(row => {
            if (row.hasOwnProperty('date')) {
                date = row.date;
            }
        })
        return new Date(date).toDateString();
    }

    /**
     * Fetching data from db
     */
    public componentDidMount() {
        fetch(dataUrl)
            .then( res => res.json() )
            .then( (result) => { 
                const sortedResults = sortByHour(result.rows);
                const columns = this.getColumns(sortedResults);
                const date = this.getDate(result.rows);

                this.setState({
                    colsData: columns,
                    date,
                    isLoaded: true,
                    rowsData: sortedResults,
                }) 
            }, err => console.warn(err) )
    }

    public render() {
        const { colsData, date, isLoaded, rowsData } = this.state;

        if (!isLoaded) {
            return (
                <h1>Hey AdCellerant! Loading app...</h1>
            )
        } else {
            return (
                <div className="container">
                    <div className="title">Paul Rowe | <span>Code Challenge: Adcellerant</span></div>
                    <div className="chart-container">
                        <Chart data={colsData} subtitle={date}/>
                    </div>
                    <div className="grid-container">
                        <Grid data={rowsData} />
                    </div>
                </div>
            )
        }
    }
}

export default App;
