// TYPES
import {Dispatch} from 'redux';
import {Currency} from '../reducer/converter-reducer';
import {getData} from '../../API';

export enum ActionsTypes {
    SET_CURRENCIES = 'SET_CURRENCIES',
    SET_CURRENT_CURRENCY = 'SET_CURRENT_CURRENCY',
    CHANGE_FIELD_VALUE = 'SET_FIELD_VALUE',
    SET_LOADING = 'SET_LOADING',
    SET_POPUP_CURRENCY = 'SET_FIRST_POPUP_CURRENCY',
    SET_MAIN_CURRENCY = 'SET_MAIN_CURRENCY'
}

export type CurrencyActionsTypeInProgress = ReturnType<typeof setCurrenciesAC>
    | ReturnType<typeof setCurrentCurrency>
    | ReturnType<typeof changeFieldValueAC>
    | ReturnType<typeof setLoadingAC>
    | ReturnType<typeof setPopupCurrencyAC>
    | ReturnType<typeof setMainCurrenciesAC>

// ACTION CREATORS
export const setCurrenciesAC = (currencies: Currency[]) => ({
    type: ActionsTypes.SET_CURRENCIES,
    payload: currencies
} as const)
export const setCurrentCurrency = (currencyOfFirstField: string, currencyOfSecondField: string) => ({
    type: ActionsTypes.SET_CURRENT_CURRENCY,
    payload: {
        currencyOfFirstField,
        currencyOfSecondField
    }
} as const)
export const changeFieldValueAC = (amountFirstField: string, amountSecondField: string) => ({
    type: ActionsTypes.CHANGE_FIELD_VALUE,
    payload: {
        amountFirstField,
        amountSecondField
    }
} as const)
export const setLoadingAC = (value: boolean) => ({
    type: ActionsTypes.SET_LOADING,
    payload: value
} as const)
export const setPopupCurrencyAC = (firstPopupCurrency: string, secondPopupCurrency: string) => ({
    type: ActionsTypes.SET_POPUP_CURRENCY,
    payload: {
        firstPopupCurrency,
        secondPopupCurrency
    }
} as const)
export const setMainCurrenciesAC = (currencies: Currency[]) => ({
    type: ActionsTypes.SET_MAIN_CURRENCY,
    payload: currencies
} as const)

// THUNK CREATORS
export const getCurrencies = () => async (dispatch: Dispatch) => {
    dispatch(setLoadingAC(true))
    let {Valute} = await getData()
    dispatch(setCurrenciesAC(Object.values(Valute)))
    dispatch(setMainCurrenciesAC([Valute.USD, Valute.EUR, Valute.JPY]))
    dispatch(setPopupCurrencyAC(Valute.CHF.CharCode, Valute.CHF.CharCode))
    dispatch(setLoadingAC(false))
}