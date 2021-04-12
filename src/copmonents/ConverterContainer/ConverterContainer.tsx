import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {changeFieldValueAC, setCurrentCurrency} from '../../redux/actions/actions';
import {Converter} from './Converter';
import {storeRootType} from '../../redux/store';

export const CurrencyContainer = () => {
    const dispatch = useDispatch()
    const {
        currencies,
        currencyFirstField,
        currencySecondField,
        countFirstField,
        countSecondField,
    } = useSelector((state: storeRootType) => state.converter)

    // Поиск объектов валюты
    let currencyObjectOfFirstField = currencies.find(el => el.CharCode === currencyFirstField)
    let currencyObjectOfSecondField = currencies.find(el => el.CharCode === currencySecondField)

    // Проверка номинала валюты

    // const checkNominal = (firstCurrency: Currency, secondCurrency: Currency) => {
    //     if (firstCurrency!.Nominal > 1) {
    //         firstCurrency!.Value = firstCurrency!.Value / firstCurrency!.Nominal
    //         firstCurrency!.Nominal = 1
    //     }
    //     if (secondCurrency!.Nominal > 1) {
    //         secondCurrency!.Value = secondCurrency!.Value / secondCurrency!.Nominal
    //         secondCurrency!.Nominal = 1
    //     }
    // }
    // useEffect(() => {
    //     checkNominal(currencyObjectOfFirstField!, currencyObjectOfSecondField!)
    // }, [])

    // Здесь вычилсяется значение, которое далее используется для ковертации
    let rateForChangeValue = currencyObjectOfFirstField!.Value / currencyObjectOfSecondField!.Value
    let rateForSecondField =  currencyObjectOfSecondField!.Value / currencyObjectOfFirstField!.Value

    // Проверка того, является ли валюта рублём
    if (currencyFirstField === 'RUR') {
        rateForChangeValue = 1 / currencyObjectOfSecondField!.Value
        rateForSecondField = currencyObjectOfSecondField!.Value
    }
    if (currencySecondField === 'RUR') {
        rateForChangeValue = currencyObjectOfFirstField!.Value
        rateForSecondField = 1 / currencyObjectOfFirstField!.Value
    }
    if (currencyObjectOfFirstField!.CharCode === 'RUR' && currencyObjectOfSecondField!.CharCode === 'RUR') {
        rateForChangeValue = 1
        rateForSecondField = 1
    }

    // Функция для смены валюты и пересчёта значение, в соответствии с новой валютой. Также присутствует проверка на 'рубль'
    const changeCurrency = (currencyOfFirstField: string, currencyOfSecondField: string, value: string) => {
        currencyObjectOfFirstField = currencies.find(el => el.CharCode === currencyOfFirstField)
        currencyObjectOfSecondField = currencies.find(el => el.CharCode === currencyOfSecondField)
        // checkNominal(currencyObjectOfFirstField!, currencyObjectOfSecondField!)
        rateForChangeValue = currencyObjectOfFirstField!.Value / currencyObjectOfSecondField!.Value
        if (currencyObjectOfFirstField!.CharCode === 'RUR') {
            rateForChangeValue = 1 / currencyObjectOfSecondField!.Value
        }
        if (currencyObjectOfSecondField!.CharCode === 'RUR') {
            rateForChangeValue = currencyObjectOfFirstField!.Value
        }
        if (currencyObjectOfFirstField!.CharCode === 'RUR' && currencyObjectOfSecondField!.CharCode === 'RUR') {
            rateForChangeValue = 1
        }
        dispatch(setCurrentCurrency(currencyOfFirstField, currencyOfSecondField))
        changeFirstFieldValue(value)
    }

    // Эти функции отвечают за конвертацию валюты
    const changeFirstFieldValue = (value: string) => {
        if (value === '') {
            dispatch(changeFieldValueAC(value, value))
        } else {
            dispatch(changeFieldValueAC(value, (+value * rateForChangeValue).toFixed(2)))
        }
    }
    const changeSecondFieldValue = (value: string) => {
        if (value === '') {
            dispatch(changeFieldValueAC(value, value))
        } else {
            dispatch(changeFieldValueAC((+value / rateForChangeValue).toFixed(2), value))
        }
    }

    return (
        <Converter
            rateSecondCurrency={rateForSecondField}
            rateFirstCurrency={rateForChangeValue}
            changeCurrency={changeCurrency}
            changeFirstFieldValue={changeFirstFieldValue}
            currencies={currencies}
            countFirstField={countFirstField}
            countSecondField={countSecondField}
            currencyFirstField={currencyFirstField}
            currencySecondField={currencySecondField}
            changeSecondFieldValue={changeSecondFieldValue}
        />

    )
}