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
    finalCurrencyRate: number
    finalRurRate: number
    changeIsBuying: (value: boolean) => void
    changeFieldValue: (e: React.ChangeEvent<HTMLInputElement>) => void
    changeCurrentCurrency: (value: string) => void
}

export const CurrencyView = (props: CurrencyViewType) => {
    const {isBuying, changeIsBuying,
        currencies, currentCurrency,
        changeCurrentCurrency, currentCountRUB,
        changeFieldValue, currentCountCurrency,
        finalCurrencyRate, finalRurRate
    } = props


    return (
        <>
            <div className='currency'>
                {
                    currencies.map(el => {
                        return <CurrencyBlock
                            currentCurrency={currentCurrency}
                            changeCurrentCurrency={changeCurrentCurrency}
                            key={`${el.ID} ${el.NumCode}`}
                            prevValue={el.Previous}
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
                                <input value={currentCountRUB} data-currency='RUR' type='number' onChange={ changeFieldValue }/>
                                <span>1 RUR = {finalRurRate} {currentCurrency}</span>
                            </label>
                            <label htmlFor="">
                                <span>You get {currentCurrency}</span>
                                <input value={ currentCountCurrency } data-currency='currency' onChange={ changeFieldValue }/>
                                <span>1 {currentCurrency} = {finalCurrencyRate} RUR</span>
                            </label>
                        </>
                        : <>
                            <label htmlFor="">
                                <span>You give {currentCurrency}</span>
                                <input value={ currentCountCurrency } data-currency='currency' onChange={ changeFieldValue }/>
                                <span>1 {currentCurrency} = {finalCurrencyRate} RUR</span>
                            </label>
                            <label htmlFor="">
                                <span>You get RUB</span>
                                <input value={currentCountRUB} data-currency='RUR' onChange={ changeFieldValue }/>
                                <span>1 RUB = {finalRurRate} {currentCurrency}</span>
                            </label>
                        </>
                }

            </div>
        </>
    )
}