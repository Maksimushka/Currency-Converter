import {API} from '../API';
import {ActionsTypes, setCurrenciesAC, setLoadingAC, setMainCurrenciesAC, setPopupCurrencyAC} from './actions/actions';
import {put, takeEvery, call, all} from 'redux-saga/effects'

export function* getCurrenciesWorker() {
    debugger
    yield put(setLoadingAC(true))
    const {Valute} = yield call(API.getCurrencies)
    yield put(setCurrenciesAC(Object.values(Valute)))
    yield put(setMainCurrenciesAC([Valute.USD, Valute.EUR, Valute.JPY]))
    yield put(setPopupCurrencyAC(Valute.CHF.CharCode, Valute.CHF.CharCode))
    yield put(setLoadingAC(false))
}

export function* watchGetCurrencies() {
    yield takeEvery(ActionsTypes.GET_CURRENCIES, getCurrenciesWorker)
}

export function* rootSaga() {
    yield all([
        watchGetCurrencies()
    ])
}