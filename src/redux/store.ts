import {createStore} from 'redux';
import {currencyReducer} from './reducer/currency-reducer';

export const store = createStore(currencyReducer)