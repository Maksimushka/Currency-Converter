import {ActionsTypes} from '../../actions/actions';
import {CurrencyActionsTypeInProgress} from './actionsInProgress';

export type currency = {
    CharCode: string
    Value: number
    Previous: number
    ID: string
    Name: string
    Nominal: number
    NumCode: string
}
export type newCurrencyReducerStateType = {
    currencies: currency[] | []
    isBuying: boolean
    currentCountFirstField: string
    currentCountSecondField: string
    currentCurrencyFirstField: string
    currentCurrencySecondField: string
    loading: boolean
}

const initialState: newCurrencyReducerStateType = {
    loading: true,
    currencies: [],
    isBuying: true,
    currentCountFirstField: '',
    currentCountSecondField: '',
    currentCurrencyFirstField: 'RUR',
    currentCurrencySecondField: 'USD'
}

export const newCurrencyReducer = (state = initialState, action: CurrencyActionsTypeInProgress): newCurrencyReducerStateType => {
    switch (action.type) {
        case ActionsTypes.SET_ISBUYING: {
            return {
                ...state,
                ...action.payload
            }
        }
        case ActionsTypes.SET_CURRENCIES: {
            return {
                ...state,
                currencies: action.payload
            }
        }
        case ActionsTypes.SET_CURRENT_CURRENCY: {
            return {
                ...state,
                currentCurrencyFirstField: action.payload.currencyOfFirstField,
                currentCurrencySecondField: action.payload.currencyOfSecondField
            }
        }
        case ActionsTypes.CHANGE_FIELD_VALUE: {
            return {
                ...state,
                currentCountFirstField: action.payload.amountFirstField,
                currentCountSecondField: action.payload.amountSecondField
            }
        }
        case ActionsTypes.SET_LOADING: {
            return {
                ...state,
                loading: action.payload
            }
        }
        default:
            return state
    }
}