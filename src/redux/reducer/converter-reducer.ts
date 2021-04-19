import {ActionsTypes, CurrencyActionsTypeInProgress} from '../actions/actions';

export type Currency = {
    CharCode: string
    Value: number
    Previous: number
    ID: string
    Name: string
    Nominal: number
    NumCode: string
}

const initialState = {
    loading: true,
    currenciesForList: [] as Currency[],
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
    firstPopupCurrency: {} as Currency,
    secondPopupCurrency: {} as Currency,
}

export type CurrencyReducerStateType = typeof initialState

export const converterReducer = (state = initialState, action: CurrencyActionsTypeInProgress): CurrencyReducerStateType => {
    switch (action.type) {
        case ActionsTypes.SET_CURRENCIES: {
            return {
                ...state,
                currencies: [...state.currencies, ...action.payload
                    .filter(el => el.CharCode !== 'XDR' && el.CharCode !== 'TJS')
                    .sort((a, b) => {
                        if (a.Name < b.Name) return -1
                        if (a.Name > b.Name) return 1
                        return 0
                    })
                    .map(el => (el.Nominal > 1) ? {...el, Value: el.Value / el.Nominal, Nominal: 1} : el)
                ],
                currenciesForList: action.payload
                    .filter(el => el.CharCode !== 'XDR' && el.CharCode !== 'TJS')
                    .sort((a, b) => {
                        if (a.Name < b.Name) return -1
                        if (a.Name > b.Name) return 1
                        return 0
                    })
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