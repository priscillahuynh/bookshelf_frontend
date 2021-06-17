import React from 'react';

const Books = (props) => {
    return (
        <div>
            {props.books && props.books.map(book => 
            <div key={book.id}><img src={book.image_url} alt="Book"/><br/>{book.title} </div>
            )}
        </div>
    )
} 

export default Books