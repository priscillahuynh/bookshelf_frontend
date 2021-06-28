import React from 'react';
import BookForm from '../components/BookForm';
import Books from '../components/Books';
import {Link} from 'react-router-dom';

class BooksContainer extends React.Component {

    render() {
        return (
            <div>
                <Link to='/'>Go back to Home Page</Link>
                <BookForm shelf={this.props.shelf} /><br/>
                <Books books={this.props.shelf && this.props.shelf.books}/>
            </div>
        )
    }
}

export default BooksContainer