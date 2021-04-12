import React, {useState} from 'react';
import './Converter.scss'
import {Currency} from '../../redux/reducer/converter-reducer';
import Currencies from './Currencies/Currencies';
import CurrenciesList from './CurrensiesList';
import {useDispatch, useSelector} from 'react-redux';
import {storeRootType} from '../../redux/store';
import {setPopupCurrencyAC} from '../../redux/actions/actions';

type ConverterPropsType = {
    rateFirstCurrency: number
    rateSecondCurrency: number
    changeCurrency: (currencyOfFirstField: string, currencyOfSecondField: string, value: string) => void
    currencies: Currency[]
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
    const dispatch = useDispatch()

    const {
        firstPopupCurrency,
        secondPopupCurrency,
        mainCurrencies
    } = useSelector((state: storeRootType) => state.converter)

    const [isVisible, setIsVisible] = useState<{list: 'first' | 'second' | null}>({list: null})
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

    const onChangeVisible = (value: 'first' | 'second' | null) => {
        setIsVisible({list: value})
    }

    const changeFirstPopupCurrency = (currency: string) => {
        onChangeVisible(null)
        if (!(currency === 'USD' || currency === 'EUR' || currency === 'RUR' || currency === 'JPY')) {
            dispatch(setPopupCurrencyAC(currency, secondPopupCurrency.CharCode))
        }
        onChangeCurrencyFirstField(currency)
    }
    const changeSecondPopupCurrency = (currency: string) => {
        onChangeVisible(null)
        if (!(currency === 'USD' || currency === 'EUR' || currency === 'RUR' || currency === 'JPY')) {
            dispatch(setPopupCurrencyAC(firstPopupCurrency.CharCode, currency))
        }
        onChangeCurrencySecondField(currency)
    }

    let rateForFirstField = rateFirstCurrency.toFixed(3)
    let rateForSecondField = rateSecondCurrency.toFixed(3)

    const toggleForFirst = isVisible.list === 'first'
    const toggleForSecond = isVisible.list === 'second'
    return (
        <div className='main'>
            <h1>Currency converter</h1>
            {
                isSwap
                    ? <div className="converterBlock">
                        <div className="converterField">
                            <Currencies
                                toggle={toggleForFirst}
                                popupCurrency={firstPopupCurrency}
                                onChangeVisible={() => onChangeVisible('first')}
                                changeCurrency={onChangeCurrencyFirstField}
                                currentCurrency={currencyFirstField}
                                currencies={mainCurrencies}/>
                            <label htmlFor="">
                                <span>You give {currencyFirstField}</span>
                                <input type={'number'} value={countFirstField} onChange={onChangeFirstField}/>
                                <span>1 {currencyFirstField} = {rateForFirstField} {currencySecondField}</span>
                            </label>
                        </div>
                        <button className={'active'} onClick={() => setIsSwap(!isSwap)}>Swap</button>
                        <div className="converterField">
                            <Currencies
                                toggle={toggleForSecond}
                                popupCurrency={secondPopupCurrency}
                                changeCurrency={onChangeCurrencySecondField}
                                currentCurrency={currencySecondField}
                                onChangeVisible={() => onChangeVisible('second')}
                                currencies={mainCurrencies}/>
                            <label htmlFor="">
                                <span>You get {currencySecondField}</span>
                                <input type={'number'} value={countSecondField} onChange={onChangeSecondField}/>
                                <span>1 {currencySecondField} = {rateForSecondField} {currencyFirstField}</span>
                            </label>
                        </div>
                    </div>
                    : <div className="converterBlock">
                        <div className="converterField">
                            <Currencies
                                toggle={toggleForSecond}
                                popupCurrency={secondPopupCurrency}
                                changeCurrency={onChangeCurrencySecondField}
                                currentCurrency={currencySecondField}
                                onChangeVisible={() => onChangeVisible('second')}
                                currencies={mainCurrencies}/>
                            <label htmlFor="">
                                <span>You give {currencySecondField}</span>
                                <input type={'number'} value={countSecondField} onChange={onChangeSecondField}/>
                                <span>1 {currencySecondField} = {rateForSecondField} {currencyFirstField}</span>
                            </label>
                        </div>
                        <button onClick={() => setIsSwap(!isSwap)}>Swap</button>
                        <div className="converterField">
                            <Currencies
                                toggle={toggleForFirst}
                                popupCurrency={firstPopupCurrency}
                                onChangeVisible={() => onChangeVisible('first')}
                                changeCurrency={onChangeCurrencyFirstField}
                                currentCurrency={currencyFirstField}
                                currencies={mainCurrencies}/>
                            <label htmlFor="">
                                <span>You get {currencyFirstField}</span>
                                <input type={'number'} value={countFirstField} onChange={onChangeFirstField}/>
                                <span>1 {currencyFirstField} = {rateForFirstField} {currencySecondField}</span>
                            </label>
                        </div>
                    </div>
            }
            {isVisible.list && <CurrenciesList
                changePopupCurrency={isVisible.list === 'first' ? changeFirstPopupCurrency : changeSecondPopupCurrency}
                currencies={currencies}/>}
        </div>
    )
}