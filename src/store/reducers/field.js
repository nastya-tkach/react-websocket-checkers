import { GET_FIELD, HANDLE_DROP, HIGHLIGHT_TARGETS } from '../actions';

export default function reducer(state = { user: 0, field: {
    gameId: 0,
    whoseMove: 0,
    moves: [],
    cells: []
}}, action){
    
    switch(action.type){
        case GET_FIELD:
            return action.data
        case HANDLE_DROP:
            return action.data
        case HIGHLIGHT_TARGETS:
            return action.data
        default: 
            return state
    }
}