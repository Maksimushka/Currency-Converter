import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {NewStoreRootType} from '../../redux/newStore';
import {
    changeFieldValueAC, setCurrentCurrency,
} from '../../redux/reducer/reducerInProgress/actionsInProgress';
import {Converter} from './Converter';


export const CurrencyContainer = () => {
    const dispatch = useDispatch()
    const {
        currencies,
        currencyFirstField,
        currencySecondField,
        countFirstField,
        countSecondField,
    } = useSelector((state: NewStoreRootType) => state.converter)

    let rateOfFirstField = currencies.find(el => el.CharCode === currencyFirstField)
    let rateOfSecondField = currencies.find(el => el.CharCode === currencySecondField)

    let rateForChangeValue: number
    rateForChangeValue = rateOfFirstField!.Value / rateOfSecondField!.Value

    if (currencyFirstField === 'RUR') {
        rateForChangeValue = 1 / rateOfSecondField!.Value
    }
    if (currencySecondField === 'RUR') {
        rateForChangeValue = rateOfFirstField!.Value
    }
    if (rateOfFirstField!.CharCode === 'RUR' && rateOfSecondField!.CharCode === 'RUR') {
        rateForChangeValue = 1
    }

    const changeCurrencyOfFirstField = (currencyOfFirstField: string, value: string) => {
        rateOfFirstField = currencies.find(el => el.CharCode === currencyOfFirstField)
        rateForChangeValue = rateOfFirstField!.Value / rateOfSecondField!.Value
        if (rateOfFirstField!.CharCode === 'RUR') {
            rateForChangeValue = 1 / rateOfSecondField!.Value
        }
        if (rateOfSecondField!.CharCode === 'RUR') {
            rateForChangeValue = rateOfFirstField!.Value
        }
        if (rateOfFirstField!.CharCode === 'RUR' && rateOfSecondField!.CharCode === 'RUR') {
            rateForChangeValue = 1
        }
        dispatch(setCurrentCurrency(currencyOfFirstField, currencySecondField))
        changeFirstFieldValue(value)
    }

    const changeCurrencyOfSecondField = (currencyOfSecondField: string, value: string) => {
        rateOfSecondField = currencies.find(el => el.CharCode === currencyOfSecondField)
        rateForChangeValue = rateOfFirstField!.Value / rateOfSecondField!.Value
        if (rateOfFirstField!.CharCode === 'RUR') {
            rateForChangeValue = 1 / rateOfSecondField!.Value
        }
        if (rateOfSecondField!.CharCode === 'RUR') {
            rateForChangeValue = rateOfFirstField!.Value
        }
        if (rateOfFirstField!.CharCode === 'RUR' && rateOfSecondField!.CharCode === 'RUR') {
            rateForChangeValue = 1
        }
        dispatch(setCurrentCurrency(currencyFirstField, currencyOfSecondField))
        changeFirstFieldValue(value)
    }


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
            changeCurrencyOfSecondField={changeCurrencyOfSecondField}
            changeCurrencyOfFirstField={changeCurrencyOfFirstField}
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