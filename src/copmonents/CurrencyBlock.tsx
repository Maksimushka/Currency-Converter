import React from 'react';

export const CurrencyBlock = (props: any) => {
    const {name, value, difference, changeCurrentCurrency} = props
    const diff: number = +(value - difference).toFixed(2)
    const finalValue = +value.toFixed(2)
    const diffStyle = `${diff > 0 ? 'up' : 'down'}`
    return (
        <div onClick={() => changeCurrentCurrency(name)} className='currency-block'>
            <h2>{name}</h2>
            <span>{finalValue}</span>
            <span className={diffStyle}>{diff}</span>
        </div>
    )
}