import React from 'react';

export const CurrencyBlock = (props: any) => {
    const {name, value, difference} = props
    const diff = Math.ceil((value - difference)*1000)/1000
    const finalValue = Math.ceil((value)*1000)/1000
    return (
        <div className='currency-block'>
            <h2>{name}</h2>
            <span>{finalValue}</span>
            <span>{diff}</span>
        </div>
    )
}