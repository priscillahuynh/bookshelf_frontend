
export default function shelfReducer(state={shelves: []}, action) {
    switch(action.type) {
        case 'FETCH_SHELVES':
        return {shelves: action.payload}
    default: 
        return state 
        
    }
}

