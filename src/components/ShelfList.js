import React from 'react';

const ShelfList = (props) => {
    return (
        <div>
            {props.shelves.map(shelf => 
            <li key={shelf.id}> {shelf.name}</li>)}
        </div>
    )
}

export default ShelfList