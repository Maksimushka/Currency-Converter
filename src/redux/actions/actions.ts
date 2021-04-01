// TYPES
import {currency} from '../reducer/currency-reducer';
import {getData} from '../../API';

export enum ActionsTypes {
    SET_CURRENCIES = 'SET_CURRENCIES',
    SET_ISBUYING = 'SET_ISBUYING',
    SET_CURRENT_CURRENCY = 'SET_CURRENT_CURRENCY',
    CHANGE_FIELD_VALUE = 'SET_FIELD_VALUE',
    SET_LOADING = 'SET_LOADING',
}
export type setIsBuyingACType = {
    type: ActionsTypes.SET_ISBUYING,
    payload: {
        isBuying: boolean
    }
}
export type setCurrenciesACType = {
    type: ActionsTypes.SET_CURRENCIES
    payload: currency[]
}
export type setCurrentCurrencyACType = {
    type: ActionsTypes.SET_CURRENT_CURRENCY
    payload: string
}
export type changeFieldValueACType = {
    type: ActionsTypes.CHANGE_FIELD_VALUE
    payload: {

    }
}
export type setLoadingACType = {
    type: ActionsTypes.SET_LOADING
    payload: boolean
}
export type CurrencyActionsType = setIsBuyingACType | setCurrenciesACType | setCurrentCurrencyACType | changeFieldValueACType | setLoadingACType

// ACTION CREATORS
export const setIsBuyingAC = (isBuying: boolean): setIsBuyingACType => ({
    type: ActionsTypes.SET_ISBUYING,
    payload: {
        isBuying
    }
})
export const setCurrenciesAC = (currencies: currency[]): setCurrenciesACType => ({
    type: ActionsTypes.SET_CURRENCIES,
    payload: currencies
})
export const setCurrentCurrency = (currency: string): setCurrentCurrencyACType => ({
    type: ActionsTypes.SET_CURRENT_CURRENCY,
    payload: currency
})
export const changeFieldValueAC = (): changeFieldValueACType => ({
    type: ActionsTypes.CHANGE_FIELD_VALUE,
    payload: {

    }
})
export const setLoadingAC = (value: boolean): setLoadingACType => ({
    type: ActionsTypes.SET_LOADING,
    payload: value
})

// THUNK CREATORS
export const getCurrencies = () => (dispatch: any) => {
    dispatch(setLoadingAC(true))
    getData().then(resp => {
        dispatch(setCurrenciesAC([resp.USD, resp.EUR, resp.GBP, resp.CHF, resp.CNY]))
        dispatch(setLoadingAC(false))
    })
}