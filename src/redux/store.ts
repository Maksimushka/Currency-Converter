import {applyMiddleware, combineReducers, createStore} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {converterReducer} from './reducer/converter-reducer';
import {rootSaga} from './actions/actions';

const reducers = combineReducers({
    converter: converterReducer
})

const sagaMiddleware = createSagaMiddleware()

export const store = createStore(reducers, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(rootSaga)

export type storeRootType = ReturnType<typeof reducers>

(window as any).store = store