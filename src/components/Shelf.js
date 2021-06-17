import React from 'react';
import BooksContainer from '../containers/BooksContainer';

const Shelf =(props) => {
    console.log(props)
    let shelf = props.shelves.filter(shelf => shelf.id == props.match.params.id)[0]
    
    return (
        <div>
            <h2>
                {shelf ? shelf.name : null }
            </h2>
                <div>
                <BooksContainer shelf={shelf}/>
                </div>
        </div>
    )
}

export default Shelf