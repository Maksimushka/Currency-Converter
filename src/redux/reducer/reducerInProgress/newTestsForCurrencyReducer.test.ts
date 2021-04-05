import {newCurrencyReducer, newCurrencyReducerStateType} from './currency-reducerInProgress';
import {setCurrentCurrency} from './actionsInProgress';

let state: newCurrencyReducerStateType;

beforeEach(() => {
    state = {
        loading: true,
        currencies: [],
        isBuying: true,
        currentCountFirstField: '',
        currentCountSecondField: '',
        currentCurrencyFirstField: 'RUR',
        currentCurrencySecondField: 'USD'
    }
})

test('new currency-reducer should change both currencies', () => {
    let newCurrencyFirstField = 'EUR'
    let newCurrencySecondField = 'RUR'

    let endState = newCurrencyReducer(state, setCurrentCurrency(newCurrencyFirstField, newCurrencySecondField))

    expect(endState.currentCurrencyFirstField).toBe(newCurrencyFirstField)
    expect(endState.currentCurrencySecondField).toBe(newCurrencySecondField)
})