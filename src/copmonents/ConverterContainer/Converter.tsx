import React, {useState} from 'react';
import './Converter.scss'
import {currency} from '../../redux/reducer/converter-reducer';
import Currencies from './Currencies';

type ConverterPropsType = {
    rateFirstCurrency: number
    rateSecondCurrency: number
    changeCurrency: (currencyOfFirstField: string, currencyOfSecondField: string, value: string) => void
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
        currencySecondField, changeCurrency,
        rateFirstCurrency, rateSecondCurrency
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

    const onChangeCurrencyFirstField = (currencyOfFirstField: string) => {
        changeCurrency(currencyOfFirstField, currencySecondField, countFirstField)
    }
    const onChangeCurrencySecondField = (currencyOfSecondField: string) => {
        changeCurrency(currencyFirstField, currencyOfSecondField, countFirstField)
    }

    let rateForFirstField = rateFirstCurrency.toFixed(3)
    let rateForSecondField = rateSecondCurrency.toFixed(3)
    return (
        <div className='main'>
            <h1>Currency converter</h1>
            {
                isSwap
                    ? <div className="converterBlock">
                        <div className="converterField">
                            <Currencies
                                changeCurrency={onChangeCurrencyFirstField}
                                currentCurrency={currencyFirstField}
                                currencies={currencies}/>
                            <label htmlFor="">
                                <span>You give {currencyFirstField}</span>
                                <input type={'number'} value={countFirstField} onChange={onChangeFirstField}/>
                                <span>1 {currencyFirstField} = {rateForFirstField} {currencySecondField}</span>
                            </label>
                        </div>
                        <button className={'active'} onClick={() => setIsSwap(!isSwap)}>Swap</button>
                        <div className="converterField">
                            <Currencies
                                changeCurrency={onChangeCurrencySecondField}
                                currentCurrency={currencySecondField}
                                currencies={currencies}/>
                            <label htmlFor="">
                                <span>You get {currencySecondField}</span>
                                <input type={'number'} value={countSecondField} onChange={onChangeSecondField}/>
                                <span>1 {currencySecondField} = {rateForSecondField} {currencyFirstField}</span>
                            </label>
                        </div>
                    </div>
                    :
                    <div className="converterBlock">
                        <div className="converterField">
                            <Currencies
                                changeCurrency={onChangeCurrencySecondField}
                                currentCurrency={currencySecondField}
                                currencies={currencies}/>
                            <label htmlFor="">
                                <span>You give {currencySecondField}</span>
                                <input type={'number'} value={countSecondField} onChange={onChangeSecondField}/>
                                <span>1 {currencySecondField} = {rateForSecondField} {currencyFirstField}</span>
                            </label>
                        </div>
                        <button onClick={() => setIsSwap(!isSwap)}>Swap</button>
                        <div className="converterField">
                            <Currencies
                                changeCurrency={onChangeCurrencyFirstField}
                                currentCurrency={currencyFirstField}
                                currencies={currencies}/>
                            <label htmlFor="">
                                <span>You get {currencyFirstField}</span>
                                <input type={'number'} value={countFirstField} onChange={onChangeFirstField}/>
                                <span>1 {currencyFirstField} = {rateForFirstField} {currencySecondField}</span>
                            </label>
                        </div>
                    </div>
            }
        </div>
    )
}