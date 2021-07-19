import { SHOW_RULES } from '../actions/field';

export default function reducer(state = [], action){
    switch(action.type){
        case SHOW_RULES:
            return action.data;
        default:
            return state;
    }
}