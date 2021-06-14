
export default function shelfReducer(state={shelves: []}, action) {
    switch(action.type) {
        case 'FETCH_SHELVES':
            return {shelves: action.payload}
        case 'ADD_SHELF':
            return {...state, shelves:[...state.shelves, action.payload]}
        default: 
        return state 
        
    }
}

