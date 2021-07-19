import { combineReducers } from 'redux';

import data from './field';
import rules from './rules';

export const reducer = combineReducers({
    data,
    rules
});