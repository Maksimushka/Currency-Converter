import React from 'react';

export const CurrencyBlock = (props: any) => {
    const {name, value, difference} = props
    return (
        <div className='currencyBlock'>
            <h2>{name}</h2>
            <span>{value}</span>
            <span>{difference}</span>
        </div>
    )
}