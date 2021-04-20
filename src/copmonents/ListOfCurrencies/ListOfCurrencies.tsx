import React from 'react';
import {useSelector} from 'react-redux';
import {storeRootType} from '../../redux/store';
import {CurrencyReducerStateType} from '../../redux/reducer/converter-reducer';
import './ListOfCurrencies.scss'
import {useWindowSize} from '../../utils/hooks';

const ListOfCurrencies = () => {
    const {currenciesForList} = useSelector<storeRootType, CurrencyReducerStateType>(state => state.converter)
    const [width] = useWindowSize()
    return (
        <div className="ListOfCurrenciesBlock">
            <h1>List of currencies</h1>

            <div className="ListOfCurrencies">
                <div className="ListOfCurrencies-description">
                    <div>Code</div>
                    <div>Nominal</div>
                    {
                        width > 700
                            ? <div className="ListOfCurrencies-description__name">Name</div>
                            : null
                    }
                    <div>Rate</div>
                    <div>Changes</div>
                </div>
                {
                    currenciesForList.map(el => {
                        const changes = el.Value - el.Previous
                        const changesStyle = `${changes > 0 ? 'up' : 'down'}`

                        return (
                            <div key={el.ID} className="ListOfCurrencies-item">
                                <div>{el.CharCode}</div>
                                <div>{el.Nominal}</div>
                                {
                                    width > 700
                                        ? <div className="ListOfCurrencies-item__name">
                                            {el.CharCode === 'GBP' ? el.Name.slice(0, 15) : el.Name}
                                        </div>
                                        : null
                                }
                                <div>{el.Value}</div>
                                <div className={changesStyle}>{changes.toFixed(3)}</div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default ListOfCurrencies;