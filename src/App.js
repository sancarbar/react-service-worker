import React, {Component} from 'react';
import "./App.css"
import SearchBar from "./SearchBar";
import BooksList from "./BooksList";

class App extends Component {


    constructor(props) {
        super(props);

        this.state = {
            booksList: [],
        };
        this.onSearchClicked = this.onSearchClicked.bind(this);
        this.findBooks = this.findBooks.bind(this);
    }

    onSearchClicked(query) {
        this.findBooks(query);
    }

    findBooks(query) {
        fetch('https://www.googleapis.com/books/v1/volumes?q=' + query)
            .then(response => response.json())
            .then(data => {
                let booksList = [];
                data.items.forEach(function (book) {
                    booksList.push({
                        title: book.volumeInfo.title,
                        image: book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : "",
                        language: book.volumeInfo.language
                    })

                });
                this.setState({booksList: booksList});
            });

    }

    render() {
        return (
            <div className="App">
                <SearchBar onSearchClicked={this.onSearchClicked}/>
                <BooksList booksList={this.state.booksList}/>
            </div>
        );
    }
}

export default App;
