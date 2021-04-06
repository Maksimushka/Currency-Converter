import {ActionsTypes, CurrencyActionsTypeInProgress} from '../actions/actions';

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
    countFirstField: string
    countSecondField: string
    currencyFirstField: string
    currencySecondField: string
    loading: boolean
}

const initialState: newCurrencyReducerStateType = {
    loading: true,
    currencies: [
        {
            CharCode: 'RUR',
            Value: 0,
            Previous: 0,
            ID: '142',
            Name: 'Российский рубль',
            Nominal: 1,
            NumCode: ''
        }
    ],
    countFirstField: '',
    countSecondField: '',
    currencyFirstField: 'RUR',
    currencySecondField: 'USD'
}

export const converterReducer = (state = initialState, action: CurrencyActionsTypeInProgress): newCurrencyReducerStateType => {
    switch (action.type) {
        case ActionsTypes.SET_CURRENCIES: {
            return {
                ...state,
                currencies: [...state.currencies, ...action.payload]
            }
        }
        case ActionsTypes.SET_CURRENT_CURRENCY: {
            return {
                ...state,
                currencyFirstField: action.payload.currencyOfFirstField,
                currencySecondField: action.payload.currencyOfSecondField
            }
        }
        case ActionsTypes.CHANGE_FIELD_VALUE: {
            return {
                ...state,
                countFirstField: action.payload.amountFirstField,
                countSecondField: action.payload.amountSecondField
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