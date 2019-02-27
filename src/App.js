import React, {Component} from 'react';
import Book from "./Book";
import "./App.css"

class App extends Component {


    constructor(props) {
        super(props);

        this.state = {
            booksList: [],
        };
    }

    componentDidMount() {
        fetch('https://www.googleapis.com/books/v1/volumes?q=bogota')
            .then(response => response.json())
            .then(data => this.setState({booksList: data.items}));
    }

    render() {
        return (
            <div className="App">
                <h2>Hello Service Workers!</h2>
                <Book authors="Alan Gilbert y María Teresa Garcés" title="Bogotá"/>
            </div>
        );
    }
}

export default App;
