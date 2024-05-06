import { combineReducers } from 'redux';
import listReducer from './reducers';

const reducer = combineReducers({
    listStore: listReducer,
});

export default reducer;
