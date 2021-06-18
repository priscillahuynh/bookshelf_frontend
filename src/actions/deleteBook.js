export const deleteBook = (bookId, shelfId) => {
    return (dispatch) => {
        fetch(`http://localhost:3000/api/v1/shelves/${shelfId}/books/${bookId}`, {
            method: 'DELETE'
        })
        .then(response => response.json())
        .then(shelf => dispatch({type: 'DELETE_BOOK', payload: shelf}))
    }
}