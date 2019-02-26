import React, { Component } from 'react';


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
            .then(data => this.setState({ booksList: data.items }));
    }

  render() {
    return (
      <div>
       <h2>Hello Service Workers!</h2>
      </div>
    );
  }
}

export default App;
