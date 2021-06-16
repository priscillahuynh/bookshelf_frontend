import React from 'react';

const Books = (props) => {
    return (
        <div>
            {props.books && props.books.map(book => 
            <p key={book.id}><img src={book.image_url}/><br/>{book.title} </p>
            )}
        </div>
    )
} 

export default Books