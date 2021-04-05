import React from 'react';
import {currency} from '../../redux/reducer/reducerInProgress/currency-reducerInProgress';
import './Converter.scss'

type CurrenciesPropsType = {
    changeCurrency: (currency: string) => void
    currencies: currency[]
    currentCurrency: string
}

const Currencies = ({currencies, changeCurrency, currentCurrency}: CurrenciesPropsType) => {

    return (
        <div className='currencies'>
            {
                currencies.map(el => {
                    const style = `currencies-block ${currentCurrency === el.CharCode ? 'active': ''}`

                    return <li
                        onClick={() => changeCurrency(el.CharCode)}
                        className={style}>{el.CharCode}</li>
                })
            }
        </div>
    );
};

export default Currencies