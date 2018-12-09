import {combineReducers} from 'redux';
import ironmansearchboxreducers from './app/ironmansearchbox/ironmansearchboxreducers'

export default combineReducers({
    searchBox: ironmansearchboxreducers
});
