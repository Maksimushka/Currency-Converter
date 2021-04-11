import React from 'react';
import {currency} from '../../../redux/reducer/converter-reducer';
import './Currencies.scss'

type CurrenciesPropsType = {
    onChangeVisible: () => void
    changeCurrency: (currency: string) => void
    currencies: currency[]
    currentCurrency: string
    popupCurrency: currency
    toggle: boolean
}

const Currencies = React.memo((props: CurrenciesPropsType) => {
    const {popupCurrency, currencies, changeCurrency, currentCurrency, onChangeVisible, toggle} = props
    const styleForToggle = `currencies-block ${toggle ? 'active' : ''}`
    return (
        <div className='currencies'>
            <ul>
                {
                    currencies.map(el => {
                        const style = `currencies-block ${currentCurrency === el.CharCode ? 'active': ''}`

                        return <li
                            key={`${el.ID} ${el.CharCode}`}
                            onClick={() => changeCurrency(el.CharCode)}
                            className={style}>{el.CharCode}</li>
                    })
                }
                <li
                    className={`currencies-block ${currentCurrency === popupCurrency.CharCode ? 'active': ''}`}
                    onClick={() => changeCurrency(popupCurrency.CharCode)}>{popupCurrency.CharCode}</li>
                <li className={styleForToggle} onClick={() => onChangeVisible()}>on</li>
            </ul>
        </div>
    );
})

export default Currencies