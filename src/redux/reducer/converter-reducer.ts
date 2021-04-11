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
    mainCurrencies: currency[] | []
    countFirstField: string
    countSecondField: string
    currencyFirstField: string
    currencySecondField: string
    loading: boolean
    firstPopupCurrency: currency
    secondPopupCurrency: currency
}

const initialState: newCurrencyReducerStateType = {
    loading: true,
    currencies: [{
            CharCode: 'RUR',
            Value: 0,
            Previous: 0,
            ID: '1423hgdfg5',
            Name: 'Российский рубль',
            Nominal: 1,
            NumCode: ''
        }],
    mainCurrencies: [{
        CharCode: 'RUR',
        Value: 0,
        Previous: 0,
        ID: '1423hgdfg5',
        Name: 'Российский рубль',
        Nominal: 1,
        NumCode: ''
    }],
    countFirstField: '',
    countSecondField: '',
    currencyFirstField: 'RUR',
    currencySecondField: 'USD',
    firstPopupCurrency: {} as currency ,
    secondPopupCurrency: {} as currency ,
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
        case ActionsTypes.SET_POPUP_CURRENCY: {
            debugger
            return {
                ...state,
                firstPopupCurrency: state.currencies.find(el => el.CharCode === action.payload.firstPopupCurrency)!,
                secondPopupCurrency: state.currencies.find(el => el.CharCode === action.payload.secondPopupCurrency)!
            }
        }
        case ActionsTypes.SET_MAIN_CURRENCY: {
            return {
                ...state,
                mainCurrencies: [...state.mainCurrencies, ...action.payload]
            }
        }
        default:
            return state
    }
}