import {converterReducer, newCurrencyReducerStateType} from './converter-reducer';
import {changeFieldValueAC, setCurrentCurrency, setLoadingAC} from '../actions/actions';

let state: newCurrencyReducerStateType;

beforeEach(() => {
    state = {
        loading: true,
        currencies: [],
        currencySecondField: 'USD',
        currencyFirstField: 'RUR',
        countFirstField: '',
        countSecondField: ''
    }
})

test('new currency-reducer should change both currencies', () => {
    let newCurrencyFirstField = 'EUR'
    let newCurrencySecondField = 'RUR'

    let endState = converterReducer(state, setCurrentCurrency(newCurrencyFirstField, newCurrencySecondField))

    expect(endState.currencyFirstField).toBe(newCurrencyFirstField)
    expect(endState.currencySecondField).toBe(newCurrencySecondField)
})

test('converter reducer should change property loading', () => {
    // Data
    let newValue = true
    // Action
    const endState = converterReducer(state, setLoadingAC(newValue))
    // Result
    expect(endState.loading).toBe(true)
})

test('converter reducer should change current count of the first field', () => {
    // Data
    let newValue = '100'
    // Action
    const endState = converterReducer(state, changeFieldValueAC( (+(newValue) * 80).toFixed(), newValue))
    // Result
    expect(endState.countFirstField).toBe('8000')
})

test('converter reducer should change current count of the second field', () => {
    // Data
    let newValue = '8000'
    // Action
    const endState = converterReducer(state, changeFieldValueAC( newValue, (+(newValue) / 80).toFixed()))
    // Result
    expect(endState.countSecondField).toBe('100')
})