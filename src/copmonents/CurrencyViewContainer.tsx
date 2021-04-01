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
    } = useSelector((state:StoreRootType) => state.currency)
    const currencyRate = currencies.find(el => el.CharCode === currentCurrency)
    const finalCurrencyRate = +currencyRate!.Value.toFixed(2)
    const finalRurRate = +(1 / currencyRate!.Value).toFixed(4)

    const changeIsBuying = (value: boolean) => dispatch(setIsBuyingAC(value))
    const changeCurrentCurrency = (value: string) => dispatch(setCurrentCurrency(value))
    const changeFieldValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        let value = e.currentTarget.value
        if (e.currentTarget.dataset.currency) {
            const trigger: string = e.currentTarget.dataset.currency;
            if (trigger === 'RUR') {
                if (value === '') {
                    dispatch(changeFieldValueAC(value, value))
                } else {
                    dispatch(changeFieldValueAC(value, (+(value) / finalCurrencyRate).toFixed(2) ))
                }
            } else {
                if (value === '') {
                    dispatch(changeFieldValueAC(value, value))
                } else {
                    dispatch(changeFieldValueAC( (+(value) * finalCurrencyRate).toFixed(2), value))
                }
            }
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
            changeFieldValue={changeFieldValue}
            changeIsBuying={changeIsBuying} />
    )
}