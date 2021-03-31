import React from 'react';
import './CurrencyView.scss'
import {CurrencyBlock} from './CurrencyBlock';
import {currency} from '../redux/reducer/currency-reducer';

export const CurrencyView = (props: {isBuying: boolean, changeIsBuying: (value: boolean) => void, currencies: currency[]}) => {
    const {isBuying, changeIsBuying, currencies} = props
    return (
        <>
            <div className='currency'>
                {
                    currencies.map(el => {
                        return <CurrencyBlock key={`${el.ID} ${el.NumCode}`} difference={el.Previous} name={el.CharCode} value={el.Value}/>
                    })
                }
            </div>
            <div className='buy-sell'>
                <button onClick={() => changeIsBuying(true)}>Buy</button>
                <button onClick={() => changeIsBuying(false)}>Sell</button>
            </div>
            <div className='fields'>
                {
                    isBuying
                        ? <>
                            <label htmlFor="">
                                You give RUB
                                <input type="text"/>
                            </label>
                            <label htmlFor="">
                                You get
                                <input type="text"/>
                            </label>
                        </>
                        : <>
                            <label htmlFor="">
                                You give
                                <input type="text"/>
                            </label>
                            <label htmlFor="">
                                You get RUB
                                <input type="text"/>
                            </label>
                        </>
                }

            </div>
        </>
    )
}