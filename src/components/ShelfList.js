import React from 'react';
import {Link} from 'react-router-dom'

const ShelfList = (props) => {
    console.log(props)
    return (
        <div>
            {props.shelves.map(shelf => 
            <li key={shelf.id}>
                <Link to={`/shelf/${shelf.id}`}>{shelf.name}</Link>
            </li>)}
        </div>
    )
}

export default ShelfList