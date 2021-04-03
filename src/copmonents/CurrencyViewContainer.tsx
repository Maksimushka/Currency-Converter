import React from 'react';
import {CurrencyView} from './CurrencyView';
import {useDispatch, useSelector} from 'react-redux';
import {changeFieldValueAC, setCurrentCurrency, setIsBuyingAC} from '../redux/actions/actions';
import {StoreRootType} from '../redux/store';

export const CurrencyViewContainer = () => {
    const dispatch = useDispatch()
    const {
        isBuying,
        currencies,
        currentCurrency,
        currentCountRUB,
        currentCountCurrency
    } = useSelector((state: StoreRootType) => state.currency)
    const currencyRate = currencies.find(el => el.CharCode === currentCurrency)
    let finalCurrencyRate = +currencyRate!.Value.toFixed(2)
    const finalRurRate = +(1 / currencyRate!.Value).toFixed(4)

    const changeIsBuying = (value: boolean) => dispatch(setIsBuyingAC(value))
    const changeCurrentCurrency = (name: string, count: string) => {
        finalCurrencyRate = +currencies.find(el => el.CharCode === name)!.Value.toFixed(2)
        dispatch(setCurrentCurrency(name))
        changeRurFieldValue(count)
    }
    const changeRurFieldValue = (value: string) => {
        if (value === '') {
            dispatch(changeFieldValueAC(value, value))
        } else {
            dispatch(changeFieldValueAC(value, (+(value) / finalCurrencyRate).toFixed(2)))
        }
    }

    const changeCurrencyFieldValue = (value: string) => {
        if (value === '') {
            dispatch(changeFieldValueAC(value, value))
        } else {
            dispatch(changeFieldValueAC((+(value) * finalCurrencyRate).toFixed(2), value))
        }
    }

    return (
        <CurrencyView
            currentCountRUB={currentCountRUB}
            currentCountCurrency={currentCountCurrency}
            currentCurrency={currentCurrency}
            currencies={currencies}
            isBuying={isBuying}
            finalRurRate={finalRurRate}
            finalCurrencyRate={finalCurrencyRate}
            changeCurrentCurrency={changeCurrentCurrency}
            changeRurFieldValue={changeRurFieldValue}
            changeCurrencyFieldValue={changeCurrencyFieldValue}
            changeIsBuying={changeIsBuying}/>
    )
}