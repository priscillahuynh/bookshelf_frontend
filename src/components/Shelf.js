import React from 'react';

const Shelf =(props) => {
    console.log(props)
    let shelf = props.shelves[props.match.params.id -1]
    return (
        <li>
            {shelf ? shelf.name : null }
        </li>
    )
}

export default Shelf