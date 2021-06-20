
export default function shelfReducer(state={shelves: []}, action) {

    switch(action.type) {
        case 'FETCH_SHELVES':
            return {shelves: action.payload}
        case 'ADD_SHELF':
            return {...state, shelves:[...state.shelves, action.payload]}
        case 'EDIT_SHELF', 'ADD_BOOK', 'DELETE_BOOK':
            let shelves = state.shelves.map(shelf => {
                if(shelf.id === action.payload.id) {
                    return action.payload
                } else {
                    return shelf
                }
            })
            return {...state, shelves: shelves}
        default: 
            return state 
        
    }
}

