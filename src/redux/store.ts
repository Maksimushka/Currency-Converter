import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunk from 'redux-thunk';
import {currencyReducer} from './reducer/currency-reducer';

const reducers = combineReducers({
    currency: currencyReducer
})

export const store = createStore(reducers, applyMiddleware(thunk))

export type StoreRootType = ReturnType<typeof reducers>

(window as any).store = store