import React from 'react';

type CurrencyBlockType = {
    currentCurrency: string
    name: string
    value: number
    prevValue: number
    changeCurrentCurrency: (name: string) => void
}

export const CurrencyBlock = (props: CurrencyBlockType) => {
    const {name, currentCurrency, value, prevValue, changeCurrentCurrency} = props
    const diff: number = +(value - prevValue).toFixed(2)
    const finalValue = +value.toFixed(2)

    const diffStyle = `${diff > 0 ? 'up' : 'down'}`
    const currencyBlockStyle = `currency-block ${currentCurrency === name ? 'active' : ''}`
    return (
        <div onClick={() => changeCurrentCurrency(name)} className={currencyBlockStyle}>
            <h2>{name}</h2>
            <span>{finalValue}</span>
            <span className={diffStyle}>{diff}</span>
        </div>
    )
}