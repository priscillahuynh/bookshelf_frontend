export const editShelf = (data) => {
    return (dispatch) => {
        fetch(`http://localhost:3000/api/v1/shelves/${data.id}`,{
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            method: 'PATCH',
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(shelf => dispatch({type: 'EDIT_SHELF', payload: shelf}))
    }
}