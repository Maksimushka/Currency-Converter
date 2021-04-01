import React from 'react';
import './CurrencyView.scss'
import {CurrencyBlock} from './CurrencyBlock';
import {currency} from '../redux/reducer/currency-reducer';

type CurrencyViewType = {
    currentCurrency: string
    currencies: currency[]
    isBuying: boolean
    currentCountRUB: string
    currentCountCurrency: string
    currencyRate: number
    changeIsBuying: (value: boolean) => void
    changeCurrentCurrency: (value: string) => void
}

export const CurrencyView = (props: CurrencyViewType) => {
    const {isBuying, changeIsBuying, currencies,
        currentCurrency, changeCurrentCurrency, currentCountRUB,
        currencyRate
    } = props

    const finalCurrencyRate = +currencyRate.toFixed(2)
    const finalRURRate = +(1 / currencyRate).toFixed(4)

    return (
        <>
            <div className='currency'>
                {
                    currencies.map(el => {
                        return <CurrencyBlock
                            changeCurrentCurrency={changeCurrentCurrency}
                            key={`${el.ID} ${el.NumCode}`}
                            difference={el.Previous}
                            name={el.CharCode}
                            value={el.Value}/>
                    })
                }
            </div>
            <div className='buy-sell'>
                <button className={isBuying ? 'active' : ''} onClick={() => changeIsBuying(true)}>Buy</button>
                <button className={isBuying ? '' : 'active'} onClick={() => changeIsBuying(false)}>Sell</button>
            </div>
            <div className='fields'>
                {
                    isBuying
                        ? <>
                            <label htmlFor="">
                                <span>You give RUR</span>
                                <input value={currentCountRUB} type="text"/>
                                <span>1 RUR = {finalRURRate} {currentCurrency}</span>
                            </label>
                            <label htmlFor="">
                                <span>You get {currentCurrency}</span>
                                <input type="text"/>
                                <span>1 {currentCurrency} = {finalCurrencyRate} RUR</span>
                            </label>
                        </>
                        : <>
                            <label htmlFor="">
                                <span>You give {currentCurrency}</span>
                                <input type="text"/>
                                <span>1 {currentCurrency} = {finalCurrencyRate} RUR</span>
                            </label>
                            <label htmlFor="">
                                <span>You get RUB</span>
                                <input value={currentCountRUB} type="text"/>
                                <span>1 RUB = {finalRURRate} {currentCurrency}</span>
                            </label>
                        </>
                }

            </div>
        </>
    )
}