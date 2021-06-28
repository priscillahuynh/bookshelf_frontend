import React from 'react';
import BooksContainer from '../containers/BooksContainer';
import ShelfEdit from '../components/ShelfEdit';

const Shelf =(props) => {
    console.log(props)
    let shelf = props.shelves.find(shelf => shelf.id === parseInt(props.match.params.id))

    return (
        <div >
            <h2>
                {shelf ? shelf.name : null }<br/>
            </h2>
                <ShelfEdit shelf={shelf}/><br/>
                <BooksContainer shelf={shelf}/>
        </div>
    )
}

export default Shelf