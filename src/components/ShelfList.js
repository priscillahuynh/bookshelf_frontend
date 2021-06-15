import React from 'react';
import Shelf from './Shelf'

const ShelfList = (props) => {
    console.log(props)
    return (
        <div>
            {props.shelves.map(shelf => 
            <div key={shelf.id}><Shelf shelf={shelf}/></div>)}
        </div>
    )
}

export default ShelfList