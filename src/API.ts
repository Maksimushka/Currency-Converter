import axios from 'axios';
import {Currency} from './redux/reducer/converter-reducer';

export const instance = axios.create({
    baseURL: `https://www.cbr-xml-daily.ru/daily_json.js`
})

type GetCurrenciesResponseType = {
    Date: string
    PreviousDate: string
    PreviousURL: string
    Timestamp: string
    Valute: Currency[]
}

export const API = {
    getCurrencies() {
        return instance.get(``).then(resp => {
            return resp.data
        })
    },
}