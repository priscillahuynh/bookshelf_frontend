import React from 'react';
import BookForm from '../components/BookForm';
import Books from '../components/Books';

class BooksContainer extends React.Component {

    render() {
        return (
            <div>
                <BookForm shelf={this.props.shelf} /><br/>
                <Books books={this.props.shelf && this.props.shelf.books}/>
            </div>
        )
    }
}

export default BooksContainer