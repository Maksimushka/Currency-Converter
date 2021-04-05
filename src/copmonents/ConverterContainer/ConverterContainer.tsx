import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {NewStoreRootType} from '../../redux/newStore';
import {
    changeFieldValueAC,
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

    let rateForChangeFirstFieldValue: number
    rateForChangeFirstFieldValue = rateOfFirstField!.Value / rateOfSecondField!.Value

    if (currencyFirstField === 'RUR') {
        rateForChangeFirstFieldValue = 1 / rateOfSecondField!.Value
    }

    if (currencySecondField === 'RUR') {
        rateForChangeFirstFieldValue = rateOfFirstField!.Value
    }

    // const changeCurrentCurrency = (currencyOfFirstField: string, currencyOfSecondField: string, count: string) => {
    //     finalCurrencyRate = +currencies.find(el => el.CharCode === currencyOfSecondField)!.Value.toFixed(2)
    //     dispatch(setCurrentCurrency(currencyOfFirstField, currencyOfSecondField))
    //     changeRurFieldValue(count)
    // }
    const changeFirstFieldValue = (value: string) => {
        if (value === '') {
            dispatch(changeFieldValueAC(value, value))
        } else {
            dispatch(changeFieldValueAC(value, (+value * rateForChangeFirstFieldValue).toFixed(2)))
        }
    }

    const changeSecondFieldValue = (value: string) => {
        if (value === '') {
            dispatch(changeFieldValueAC(value, value))
        } else {
            dispatch(changeFieldValueAC((+value / rateForChangeFirstFieldValue).toFixed(2), value))
        }
    }

    return (
        <Converter
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