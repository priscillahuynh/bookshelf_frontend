
export const addShelf = (data) => {
    return (dispatch) => {
        fetch('http://localhost:3000/api/v1/shelves',{
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(shelf => dispatch({type: 'ADD_SHELF', payload: shelf}))
    }
}