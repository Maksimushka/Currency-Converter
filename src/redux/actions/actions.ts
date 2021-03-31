// TYPES
import {currency} from '../reducer/currency-reducer';
import {getData} from '../../API';

export enum ActionsTypes {
    SET_CURRENCIES = 'SET_CURRENCIES',
    SET_ISBUYING = 'SET_ISBUYING',
    SET_CURRENT_CURRENCY = 'SET_CURRENT_CURRENCY',
    CHANGE_FIELD_VALUE = 'SET_FIELD_VALUE',
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
export type CurrencyActionsType = setIsBuyingACType | setCurrenciesACType | setCurrentCurrencyACType | changeFieldValueACType

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

// THUNK CREATORS
export const getCurrencies = () => (dispatch: any) => {
    const currencies = getData().then(resp => {
        dispatch(setCurrenciesAC([resp.USD, resp.EUR, resp.GBP, resp.CHF, resp.CNY]))
    })
    console.log(currencies)
}