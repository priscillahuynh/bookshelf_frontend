export function fetchShelves() {
    return (dispatch) => {
    fetch('http://localhost:3000/api/v1/shelves')
    .then(response => response.json())
    .then(shelves => dispatch({
        type: 'FETCH_SHELVES',
        payload: shelves
        }))
    }
}