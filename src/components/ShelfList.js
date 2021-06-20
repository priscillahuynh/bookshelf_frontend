import React from 'react';
import {Link} from 'react-router-dom'
import { deleteShelf } from '../actions/deleteShelf';
import { connect } from 'react-redux';

const ShelfList = (props) => {
    console.log(props)

    const handleDelete = (shelf) => {
        props.deleteShelf(shelf.id)
    }

    return (
        <div>
            {props.shelves.map(shelf => 
            <div key={shelf.id}>
                <Link to={`/shelf/${shelf.id}`}>{shelf.name}</Link>  <button onClick={() => handleDelete(shelf)}>Delete</button>
            </div>)}
        </div>
    )
}

export default connect(null, {deleteShelf})(ShelfList)