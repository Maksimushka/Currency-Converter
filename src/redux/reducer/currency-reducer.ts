type currency = {
    name: string
    value: number
}
type CurrencyReducerStateType = {
    currencies: currency[] | []
}

const initialState: CurrencyReducerStateType = {
    currencies: []
}

export const currencyReducer = (state: CurrencyReducerStateType = initialState, action: any): CurrencyReducerStateType => {
    switch (action.type) {
        case 'SET_USD': {
            return state
        }
        default:
            return state
    }
}