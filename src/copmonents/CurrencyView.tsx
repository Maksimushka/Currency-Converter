import React from 'react';
import './CurrencyView.scss'
import {CurrencyBlock} from './CurrencyBlock';

export const CurrencyView = () => {
    return (
        <>
            <div className='currency'>
                <CurrencyBlock difference={1.4} name={'dsafsda'} value={75} />
            </div>
            <div className='buy-sell-block'>
                <button>Buy</button>
                <button>Sell</button>
            </div>
            <div className='fields'>
                <input type="text"/>
                <input type="text"/>
            </div>
        </>
    )
}