import React from 'react';
import {useSelector} from 'react-redux';
import {storeRootType} from '../../redux/store';
import {CurrencyReducerStateType} from '../../redux/reducer/converter-reducer';
import './ListOfCurrencies.scss'

const ListOfCurrencies = () => {
    const {currenciesForList} = useSelector<storeRootType, CurrencyReducerStateType>(state => state.converter)

    return (
        <div className='ListOfCurrenciesBlock'>
            <h1>List of currencies</h1>
            <div className='ListOfCurrencies'>
                <div className='ListOfCurrencies-description'>
                    <div>Code</div>
                    <div>Nominal</div>
                    <div>Name</div>
                    <div>Previous</div>
                    <div>Value</div>
                </div>
                {
                    currenciesForList.map(el => {
                        return (
                            <div key={el.ID} className='ListOfCurrencies-item'>
                                <div className='ListOfCurrencies-item__value'>{el.CharCode}</div>
                                <div className='ListOfCurrencies-item__value'>{el.Nominal}</div>
                                <div className='ListOfCurrencies-item__name'>
                                    {el.CharCode === 'GBP' ? el.Name.slice(0,15): el.Name}
                                </div>
                                <div className='ListOfCurrencies-item__value'>{el.Previous}</div>
                                <div className='ListOfCurrencies-item__value'>{el.Value}</div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default ListOfCurrencies;