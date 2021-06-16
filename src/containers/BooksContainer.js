import React from 'react';
import BookForm from '../components/BookForm';
import Books from '../components/Books';

class BooksContainer extends React.Component {

    render() {
        return (
            <div>
                <BookForm/>
                <Books shelf={this.props.shelf && this.props.shelf.books}/>
            </div>
        )
    }
}

export default BooksContainer