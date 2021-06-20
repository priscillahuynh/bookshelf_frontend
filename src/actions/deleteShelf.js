export const deleteShelf = (shelfId) => {
    return (dispatch) => {
        fetch(`http://localhost:3000/api/v1/shelves/${shelfId}`, {
            method: 'DELETE'
        })
        .then(response => response.json())
        .then(shelf => dispatch({type: 'DELETE_SHELF', payload: shelf}))
    }
}