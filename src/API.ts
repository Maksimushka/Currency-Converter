import axios from 'axios';

export const instance = axios.create({
    baseURL: `https://www.cbr-xml-daily.ru/daily_json.js`
})


export const getData = () => {
    return instance.get(``).then(resp => {
        return resp.data
    })
}