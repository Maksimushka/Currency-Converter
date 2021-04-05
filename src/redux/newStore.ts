import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunk from 'redux-thunk';
import {newCurrencyReducer} from './reducer/reducerInProgress/currency-reducerInProgress';

const reducers = combineReducers({
    converter: newCurrencyReducer
})

export const newStore = createStore(reducers, applyMiddleware(thunk))

export type NewStoreRootType = ReturnType<typeof reducers>

(window as any).store = newStore