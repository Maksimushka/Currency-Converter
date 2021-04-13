import React, {LegacyRef} from 'react';
import {Currency} from '../../redux/reducer/converter-reducer';

type CurrenciesListPropsType = {
    currencies: Currency[]
    changePopupCurrency: (currency: string) => void
    width: number
    popupRef?: LegacyRef<HTMLDivElement> | undefined
}

const CurrenciesList = ({currencies, changePopupCurrency, width, popupRef}: CurrenciesListPropsType) => {

    if (width < 990) {
        return (
            <select  onChange={(e) => changePopupCurrency(e.currentTarget.value)} className="currenciesList-select">
                {
                    currencies.map(el => {
                        if (el.CharCode === 'GBP') {
                            return (
                                <option
                                    value={el.CharCode}
                                    key={`${el.Name} ${el.ID}`}>
                                    {el.Name.slice(0, 15)}
                                </option>
                            )
                        }
                        return (
                            <option
                                value={el.CharCode}
                                key={`${el.Name} ${el.ID}`}>
                                {el.Name}
                            </option>
                        )
                    })
                }
            </select>
        )
    }

    return (
        <div ref={popupRef} className="currenciesList">
            {
                currencies.map(el => {
                    if (el.CharCode === 'GBP') {
                        return (
                            <div
                                onClick={() => changePopupCurrency(el.CharCode)}
                                key={`${el.Name} ${el.ID}`}
                                className="currenciesList-item">
                                <span>{el.Name.slice(0, 15)}</span>
                                <span>{el.CharCode}</span>
                            </div>
                        )
                    }
                    return (
                        <div
                            onClick={() => changePopupCurrency(el.CharCode)}
                            key={`${el.Name} ${el.ID}`}
                            className="currenciesList-item">
                            <span>{el.Name}</span>
                            <span>{el.CharCode}</span>
                        </div>
                    )
                })
            }
        </div>
    );
};

export default CurrenciesList;