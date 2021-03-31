import {ActionsTypes, CurrencyActionsType} from '../actions/actions';

export type currency = {
    CharCode: string
    Value: number
    Previous: number
    ID: string
    Name: string
    Nominal: number
    NumCode: string
}
export type CurrencyReducerStateType = {
    currencies: currency[] | []
    isBuying: boolean
    currentCountRUB: string
    currentCountCurrency: string
    currentCurrency: string
}

const initialState: CurrencyReducerStateType = {
    currencies: [],
    isBuying: true,
    currentCountRUB: '',
    currentCountCurrency: '',
    currentCurrency: 'EUR'
}

export const currencyReducer = (state = initialState, action: CurrencyActionsType): CurrencyReducerStateType => {
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
                currentCurrency: action.payload
            }
        }
        default:
            return state
    }
}

