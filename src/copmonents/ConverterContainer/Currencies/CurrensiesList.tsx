import React from 'react';
import {currency} from '../../../redux/reducer/converter-reducer';

type CurrenciesListPropsType = {
    currencies: currency[]
    changePopupCurrency: (currency: string) => void
}

const CurrenciesList = ({currencies, changePopupCurrency}: CurrenciesListPropsType) => {

    return (
        <div className="currenciesList">
            {
                currencies.map(el => {
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