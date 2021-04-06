import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunk from 'redux-thunk';
import {converterReducer} from './reducer/converter-reducer';

const reducers = combineReducers({
    converter: converterReducer
})

export const store = createStore(reducers, applyMiddleware(thunk))

export type storeRootType = ReturnType<typeof reducers>

(window as any).store = store