import React from 'react';

export const CurrencyBlock = (props: any) => {
    const {name, value, difference, changeCurrentCurrency} = props
    const diff = Math.ceil((value - difference)*1000)/1000
    const finalValue = Math.ceil((value)*1000)/1000
    const diffStyle = `${diff > 0 ? 'up' : 'down'}`
    return (
        <div onClick={() => changeCurrentCurrency(name)} className='currency-block'>
            <h2>{name}</h2>
            <span>{finalValue}</span>
            <span className={diffStyle}>{diff}</span>
        </div>
    )
}