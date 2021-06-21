import React from 'react';
import {Link} from 'react-router-dom'
import { deleteShelf } from '../actions/deleteShelf';
import { connect } from 'react-redux';
import Welcome from '../components/Welcome'
import ShelfForm from '../components/ShelfForm'

const ShelfList = (props) => {
    console.log(props)

    const handleDelete = (shelf) => {
        props.deleteShelf(shelf.id)
    }

    return (
        <div>
            <Welcome /><br/>
            <ShelfForm/>
            {props.shelves.map(shelf => 
            <div key={shelf.id}>
                <Link to={`/shelf/${shelf.id}`}>{shelf.name}</Link>  <button onClick={() => handleDelete(shelf)} type="button" class="btn btn-outline-secondary btn-sm" >Delete</button>
            </div>)}
        </div>
    )
}

export default connect(null, {deleteShelf})(ShelfList)