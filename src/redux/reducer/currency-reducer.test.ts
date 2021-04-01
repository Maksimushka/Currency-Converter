import {currencyReducer, CurrencyReducerStateType} from './currency-reducer';
import {changeFieldValueAC, setCurrentCurrency, setIsBuyingAC, setLoadingAC} from '../actions/actions';

let state: CurrencyReducerStateType;

beforeEach(() => {
    state = {
        loading: false,
        currencies: [],
        isBuying: true,
        currentCountRUB: '',
        currentCountCurrency: '',
        currentCurrency: 'EUR'
    }
})

test('currency reducer should change property isBuying', () => {
    // Data
    let newValue = false
    // Action
    const endState = currencyReducer(state, setIsBuyingAC(newValue))
    // Result
    expect(endState.isBuying).toBe(false)
})

test('currency reducer should change property loading', () => {
    // Data
    let newValue = true
    // Action
    const endState = currencyReducer(state, setLoadingAC(newValue))
    // Result
    expect(endState.loading).toBe(true)
})

test('currency reducer should change current currency', () => {
    // Data
    let newValue = 'USD'
    // Action
    const endState = currencyReducer(state, setCurrentCurrency(newValue))
    // Result
    expect(endState.currentCurrency).toBe('USD')
})

test('currency reducer should change current count RUR', () => {
    // Data
    let newValue = '100'
    // Action
    const endState = currencyReducer(state, changeFieldValueAC( (+(newValue) * 80).toFixed(), newValue))
    // Result
    expect(endState.currentCountRUB).toBe('8000')
})

test('currency reducer should change current count currency', () => {
    // Data
    let newValue = '8000'
    // Action
    const endState = currencyReducer(state, changeFieldValueAC( newValue, (+(newValue) / 80).toFixed()))
    // Result
    expect(endState.currentCountCurrency).toBe('100')
})