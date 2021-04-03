import React, {useEffect, useState} from 'react';
import './CurrencyView.scss'
import {CurrencyBlock} from './CurrencyBlock';
import {currency} from '../redux/reducer/currency-reducer';

type CurrencyViewType = {
    currentCurrency: string
    currencies: currency[]
    isBuying: boolean
    currentCountRUB: string
    currentCountCurrency: string
    finalCurrencyRate: number
    finalRurRate: number
    changeIsBuying: (value: boolean) => void
    changeRurFieldValue: (value: string) => void
    changeCurrencyFieldValue: (value: string) => void
    changeCurrentCurrency: (value: string, count: string) => void
}

export const CurrencyView = (props: CurrencyViewType) => {
    const {
        isBuying, changeIsBuying,
        currencies, currentCurrency,
        changeCurrentCurrency, currentCountRUB,
        currentCountCurrency, finalCurrencyRate,
        finalRurRate, changeRurFieldValue,
        changeCurrencyFieldValue
    } = props

    const onChangeCurrencyCount = (e: React.ChangeEvent<HTMLInputElement>) => {
        let value = e.currentTarget.value
        changeCurrencyFieldValue(value)
    }
    const onChangeRurCount = (e: React.ChangeEvent<HTMLInputElement>) => {
        let value = e.currentTarget.value
        changeRurFieldValue(value)
    }

    const onChangeCurrentCurrency = (value: string) => {
        changeCurrentCurrency(value, currentCountRUB)
    }

    const onChangeIsBuying = (bol: boolean) => {
        changeIsBuying(bol)
    }

    return (
        <>
            <div className='currency'>
                {
                    currencies.map(el => {
                        return <CurrencyBlock
                            currentCurrency={currentCurrency}
                            changeCurrentCurrency={onChangeCurrentCurrency}
                            key={`${el.ID} ${el.NumCode}`}
                            prevValue={el.Previous}
                            name={el.CharCode}
                            value={el.Value}/>
                    })
                }
            </div>
            <div className='buy-sell'>
                <button className={isBuying ? 'active' : ''} onClick={() => onChangeIsBuying(true)}>Buy</button>
                <button className={isBuying ? '' : 'active'} onClick={() => onChangeIsBuying(false)}>Sell</button>
            </div>
            <div className='fields'>
                {
                    isBuying
                        ? <>
                            <label htmlFor="">
                                <span>You give RUR</span>
                                <input value={currentCountRUB} data-currency='RUR' type='number'
                                       onChange={onChangeRurCount}/>
                                <span>1 RUR = {finalRurRate} {currentCurrency}</span>
                            </label>
                            <label htmlFor="">
                                <span>You get {currentCurrency}</span>
                                <input value={currentCountCurrency} data-currency='currency'
                                       onChange={onChangeCurrencyCount}/>
                                <span>1 {currentCurrency} = {finalCurrencyRate} RUR</span>
                            </label>
                        </>
                        : <>
                            <label htmlFor="">
                                <span>You give {currentCurrency}</span>
                                <input value={currentCountCurrency} data-currency='currency'
                                       onChange={onChangeCurrencyCount}/>
                                <span>1 {currentCurrency} = {finalCurrencyRate} RUR</span>
                            </label>
                            <label htmlFor="">
                                <span>You get RUB</span>
                                <input value={currentCountRUB} data-currency='RUR'
                                       onChange={onChangeRurCount}/>
                                <span>1 RUB = {finalRurRate} {currentCurrency}</span>
                            </label>
                        </>
                }

            </div>
        </>
    )
}