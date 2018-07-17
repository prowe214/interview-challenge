import * as React from 'react';
import './App.css';
import { Grid } from './Components/Grid/Grid';
import { IState } from './Types/Types';

const dataUrl = 'http://localhost:3001/data';

class App extends React.Component<{}, IState> {
    constructor(props: {}) {
        super(props);

        this.state = {
            data: [],
            isLoaded: false,
        }
    }

    public componentDidMount() {
        fetch(dataUrl)
            .then( res => res.json() )
            .then( (result) => { 
                this.setState({
                    data: result.rows,
                    isLoaded: true,
                }) 
            }, err => console.warn(err) )
    }

    public render() {
        const { data, isLoaded } = this.state;

        if (!isLoaded) {
            return (
                <h1>Hey AdCellerant! Loading app...</h1>
            )
        } else {
            return (
                <Grid data={data} />
            );
        }
    }
}

export default App;
