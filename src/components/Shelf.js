import React from 'react';
import BooksContainer from '../containers/BooksContainer';

const Shelf =(props) => {
    let shelf = props.shelves.filter(shelf => shelf.id == props.match.params.id)[0]
    console.log(shelf)
    return (
        <div>
            <h2>
                {shelf ? shelf.name : null }
            </h2>
                <p>
                    <BooksContainer shelf={shelf}/>
                </p>
        </div>
    )
}

export default Shelf