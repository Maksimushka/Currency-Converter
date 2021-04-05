import React, {useState} from 'react';
import './../CurrencyView.scss'
import {currency} from '../../redux/reducer/reducerInProgress/currency-reducerInProgress';
import Currencies from './Currencies';

type ConverterPropsType = {

    changeCurrencyOfFirstField: (currencyOfFirstField: string) => void
    changeCurrencyOfSecondField: (currencyOfSecondField: string) => void
    currencies: currency[]
    currencyFirstField: string
    currencySecondField: string
    countFirstField: string
    countSecondField: string
    changeFirstFieldValue: (value: string) => void
    changeSecondFieldValue: (value: string) => void
}

export const Converter = (props: ConverterPropsType) => {
    const {
        changeFirstFieldValue, changeSecondFieldValue,
        currencies, countFirstField,
        countSecondField, currencyFirstField,
        currencySecondField, changeCurrencyOfFirstField,
        changeCurrencyOfSecondField
    } = props

    const [isSwap, setIsSwap] = useState(true)

    const onChangeFirstField = (e: React.ChangeEvent<HTMLInputElement>) => {
        let value = e.currentTarget.value
        changeFirstFieldValue(value)
    }
    const onChangeSecondField = (e: React.ChangeEvent<HTMLInputElement>) => {
        let value = e.currentTarget.value
        changeSecondFieldValue(value)
    }

    // const onChangeCurrentCurrency = (value: string) => {
    //     changeCurrentCurrency(value, currentCountRUB)
    // }

    return (
        <>
            <div className='fields'>
                {
                    isSwap
                        ? <>
                            <div>
                                <Currencies
                                    changeCurrency={changeCurrencyOfFirstField}
                                    currentCurrency={currencyFirstField}
                                    currencies={currencies}/>
                                <label htmlFor="">
                                    <span>You give {currencyFirstField}</span>
                                    <input value={countFirstField} onChange={onChangeFirstField}/>
                                    {/*<span>1 RUR = {finalRurRate} {currentCurrency}</span>*/}
                                </label>
                            </div>
                            <button className={'active'} onClick={() => setIsSwap(!isSwap)}>Swap</button>
                            <div>
                                <Currencies
                                    changeCurrency={changeCurrencyOfSecondField}
                                    currentCurrency={currencySecondField}
                                    currencies={currencies}/>
                                <label htmlFor="">
                                    <span>You get {currencySecondField}</span>
                                    <input value={countSecondField} onChange={onChangeSecondField}/>
                                    {/*<span>1 {currentCurrency} = {finalCurrencyRate} RUR</span>*/}
                                </label>
                            </div>

                        </>
                        : <>
                            <div>
                                <Currencies
                                    changeCurrency={changeCurrencyOfSecondField}
                                    currentCurrency={currencySecondField}
                                    currencies={currencies}/>
                                <label htmlFor="">
                                    <span>You give {currencySecondField}</span>
                                    <input value={countSecondField} onChange={onChangeSecondField}/>
                                    {/*<span>1 {currentCurrency} = {finalCurrencyRate} RUR</span>*/}
                                </label>
                            </div>
                            <button className={'active'} onClick={() => setIsSwap(!isSwap)}>Swap</button>
                            <div>
                                <Currencies
                                    changeCurrency={changeCurrencyOfFirstField}
                                    currentCurrency={currencyFirstField}
                                    currencies={currencies}/>
                                <label htmlFor="">
                                    <span>You get {currencyFirstField}</span>
                                    <input value={countFirstField} onChange={onChangeFirstField}/>
                                    {/*<span>1 RUB = {finalRurRate} {currentCurrency}</span>*/}
                                </label>
                            </div>
                        </>
                }

            </div>
        </>
    )
}