import React, {useEffect, useRef, useState} from 'react';
import './Converter.scss'
import {Currency} from '../../redux/reducer/converter-reducer';
import PopupCurrencies from '../PopupCurrencies';
import {useDispatch, useSelector} from 'react-redux';
import {storeRootType} from '../../redux/store';
import {setPopupCurrencyAC} from '../../redux/actions/actions';
import {useWindowSize} from '../../utils/hooks';
import ConverterView from '../Converter-view';

type ConverterPropsType = {
    rateFirstCurrency: number
    rateSecondCurrency: number
    changeCurrency: (currencyOfFirstField: string, currencyOfSecondField: string, value: string) => void
    currencies: Currency[]
    changeFirstFieldValue: (value: string) => void
    changeSecondFieldValue: (value: string) => void
}

export const Converter = (props: ConverterPropsType) => {
    const {
        changeFirstFieldValue, changeSecondFieldValue,
        changeCurrency, rateFirstCurrency, rateSecondCurrency
    } = props
    const {
        firstPopupCurrency, secondPopupCurrency,
        currencyFirstField, currencySecondField,
        countFirstField, countSecondField
    } = useSelector((state: storeRootType) => state.converter)
    const dispatch = useDispatch()

    const [isVisible, setIsVisible] = useState<{ list: 'first' | 'second' | null }>({list: null})
    const [width] = useWindowSize()
    const popupRef = useRef<any>()
    useEffect(() => {
        if (isVisible.list && width > 990) {
            document.body.addEventListener('click', handleOutsideClick)
        }
        return () => {
            document.body.removeEventListener('click', handleOutsideClick)
        }
    }, [isVisible, width])

    const onChangeVisible = (value: 'first' | 'second' | null) => {
        setIsVisible({list: value})
    }
    const handleOutsideClick = (e: any) => {
        if (!e.path.includes(popupRef.current)) {
            setIsVisible({list: null})
        }
    }

    const onChangeCurrencyFirstField = (currencyOfFirstField: string) => {
        changeCurrency(currencyOfFirstField, currencySecondField, countFirstField)
    }
    const onChangeCurrencySecondField = (currencyOfSecondField: string) => {
        changeCurrency(currencyFirstField, currencyOfSecondField, countFirstField)
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
    const swapCurrencies = () => {
        changeCurrency(currencySecondField, currencyFirstField, countFirstField)
        dispatch(setPopupCurrencyAC(secondPopupCurrency.CharCode, firstPopupCurrency.CharCode))
    }

    const rateForFirstField = rateFirstCurrency.toFixed(4)
    const rateForSecondField = rateSecondCurrency.toFixed(4)
    const toggleForFirst = isVisible.list === 'first'
    const toggleForSecond = isVisible.list === 'second'
    return (
        <div className="main">
            <h1>Currency converter</h1>
            <div className="converterBlock">
                <div className='converterField'>
                    <span>You give </span>
                    <ConverterView
                        width={width}
                        changePopupCurrency={changeFirstPopupCurrency}
                        toggle={toggleForFirst}
                        popupCurrency={firstPopupCurrency}
                        count={countFirstField}
                        changeCurrency={onChangeCurrencyFirstField}
                        onChangeVisible={() => onChangeVisible('first')}
                        onChangeFieldValue={changeFirstFieldValue}
                        currentCurrency={currencyFirstField}
                    />
                    <span>1 {currencyFirstField} = {rateForFirstField} {currencySecondField}</span>
                </div>
                <button className={'active'} onClick={() => swapCurrencies()}>Swap</button>
                <div  className='converterField'>
                    <span>You get </span>
                    <ConverterView
                        width={width}
                        toggle={toggleForSecond}
                        popupCurrency={secondPopupCurrency}
                        count={countSecondField}
                        changeCurrency={onChangeCurrencySecondField}
                        onChangeVisible={() => onChangeVisible('second')}
                        onChangeFieldValue={changeSecondFieldValue}
                        currentCurrency={currencySecondField}
                        changePopupCurrency={changeSecondPopupCurrency}
                    />
                    <span>1 {currencySecondField} = {rateForSecondField} {currencyFirstField}</span>
                </div>
            </div>
            {(isVisible.list && width > 990) && <PopupCurrencies
                popupRef={popupRef}
                width={width}
                changePopupCurrency={isVisible.list === 'first' ? changeFirstPopupCurrency : changeSecondPopupCurrency}/>}
        </div>
    )
}