import React from 'react';
import { connect } from 'react-redux'
import { deleteBook } from '../actions/deleteBook'

const Books = (props) => {

    const handleDelete = (book) => {
        props.deleteBook(book.id, book.shelf_id)
    }

    return (
        <div>
            {props.books && props.books.map(book =>
                <div key={book.id}>
                    <img src={book.image_url} alt="Book" /><br />{book.title} <button onClick={() => handleDelete(book)} type="button" class="btn btn-outline-secondary btn-sm" >Delete</button>
                </div>
            )}
        </div>
    )
}

export default connect(null, { deleteBook })(Books)