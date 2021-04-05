import React, {useState} from 'react';
import './../CurrencyView.scss'
import {currency} from '../../redux/reducer/reducerInProgress/currency-reducerInProgress';
type ConverterPropsType = {

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
        currencySecondField
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
            <div className='currency'>
                {/*{*/}
                {/*    currencies.map(el => {*/}
                {/*        return <CurrencyBlock*/}
                {/*            currentCurrency={currentCurrency}*/}
                {/*            changeCurrentCurrency={onChangeCurrentCurrency}*/}
                {/*            key={`${el.ID} ${el.NumCode}`}*/}
                {/*            prevValue={el.Previous}*/}
                {/*            name={el.CharCode}*/}
                {/*            value={el.Value}/>*/}
                {/*    })*/}
                {/*}*/}
            </div>
            <div className='buy-sell'>
                <button className={isSwap ? 'active' : ''} onClick={() => setIsSwap(true)}>Buy</button>
                <button className={isSwap ? '' : 'active'} onClick={() => setIsSwap(false)}>Sell</button>
            </div>
            <div className='fields'>
                {
                    isSwap
                        ? <>
                            <label htmlFor="">
                                <span>You give {currencyFirstField}</span>
                                <input value={countFirstField} onChange={onChangeFirstField}/>
                                {/*<span>1 RUR = {finalRurRate} {currentCurrency}</span>*/}
                            </label>
                            <label htmlFor="">
                                <span>You get {currencySecondField}</span>
                                <input value={countSecondField} onChange={onChangeSecondField}/>
                                {/*<span>1 {currentCurrency} = {finalCurrencyRate} RUR</span>*/}
                            </label>
                        </>
                        : <>
                            <label htmlFor="">
                                <span>You give {currencySecondField}</span>
                                <input value={countSecondField} onChange={onChangeSecondField}/>
                                {/*<span>1 {currentCurrency} = {finalCurrencyRate} RUR</span>*/}
                            </label>
                            <label htmlFor="">
                                <span>You get {currencyFirstField}</span>
                                <input value={countFirstField} onChange={onChangeFirstField}/>
                                {/*<span>1 RUB = {finalRurRate} {currentCurrency}</span>*/}
                            </label>
                        </>
                }

            </div>
        </>
    )
}