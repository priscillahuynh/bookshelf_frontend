import React from 'react';
import BooksContainer from '../containers/BooksContainer';
import ShelfEdit from '../components/ShelfEdit';

const Shelf =(props) => {
    console.log(props)
    let shelf = props.shelves.filter(shelf => shelf.id == props.match.params.id)[0]
    
    return (
        <div>
            <h2>
                {shelf ? shelf.name : null }
                <ShelfEdit shelf={shelf}/>
            </h2>
                <BooksContainer shelf={shelf}/>
        </div>
    )
}

export default Shelf