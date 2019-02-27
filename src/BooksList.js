import React, {Component} from 'react';
import Book from "./Book";


export default class BooksList extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        const books = this.props.booksList.map((book, i) => {
            return (
                <Book key={i} language={book.language} title={book.title} image={book.image}/>
            );
        });

        return (
            <div>
                {books}
            </div>
        );


    }
}