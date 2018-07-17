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
            col.data = rowsArray.map((row: IRow) => {
                return (
                    [
                        row.hourOfDay,
                        row[field]
                    ]
                )
            })

            // col.data.sort((a, b) => {
            //     return a.
            // })
            return col;
        })
        return colsData;
    }

    public componentDidMount() {
        fetch(dataUrl)
            .then( res => res.json() )
            .then( (result) => { 
                const sortedResults = sortByHour(result.rows);
                const columns = this.getColumns(sortedResults);

                this.setState({
                    colsData: columns,
                    isLoaded: true,
                    rowsData: sortedResults,
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
