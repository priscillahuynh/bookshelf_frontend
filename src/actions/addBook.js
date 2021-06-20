export const addBook = (book, shelf_id) => {
    return (dispatch) => {
        fetch(`http://localhost:3000/api/v1/shelves/${shelf_id}/books`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(book)
        })
            .then(response => response.json())
            .then(shelf => {
                if (shelf.error) {
                    alert(shelf.error)
                } else {
                    dispatch({ type: 'ADD_BOOK', payload: shelf })
                }
            }
    )}
}