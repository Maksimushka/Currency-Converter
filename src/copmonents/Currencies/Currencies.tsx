import React from 'react';
import {Currency} from '../../redux/reducer/converter-reducer';
import './Currencies.scss'
import CurrenciesList from '../ConverterContainer/CurrensiesList';
import {useSelector} from 'react-redux';
import {storeRootType} from '../../redux/store';

type CurrenciesPropsType = {
    onChangeVisible: () => void
    changeCurrency: (currency: string) => void
    currentCurrency: string
    popupCurrency: Currency
    toggle: boolean
    changePopupCurrency: (currency: string) => void
    width: number
}

const Currencies = React.memo((props: CurrenciesPropsType) => {
    const {
        popupCurrency,  changeCurrency,
        currentCurrency, onChangeVisible,
        width, toggle, changePopupCurrency
    } = props

    const {mainCurrencies} = useSelector((state: storeRootType) => state.converter)

    const styleForToggle = `currencies-block toggle ${toggle ? 'active' : ''}`

    return (
        <div className="currencies">
            <ul>
                {
                    mainCurrencies.map(el => {
                        const style = `currencies-block ${currentCurrency === el.CharCode ? 'active' : ''}`

                        return <li
                            key={`${el.ID} ${el.CharCode}`}
                            onClick={() => changeCurrency(el.CharCode)}
                            className={style}>{el.CharCode}</li>
                    })
                }
                <li
                    className={`currencies-block ${currentCurrency === popupCurrency.CharCode ? 'active' : ''}`}
                    onClick={() => changeCurrency(popupCurrency.CharCode)}>{popupCurrency.CharCode}
                </li>
                {
                    width > 990
                        ? <li className={styleForToggle} onClick={() => onChangeVisible()}>
                            <svg
                                className={toggle ? 'rotated' : ''}
                                width="13"
                                height="10"
                                viewBox="0 0 10 6"
                                fill="black"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
                                    fill="#2C2C2C"
                                />
                            </svg>
                        </li>
                        : <li className={styleForToggle}>
                            <svg
                                width="13"
                                height="10"
                                viewBox="0 0 10 6"
                                fill="black"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
                                    fill="#2C2C2C"
                                />
                            </svg>
                            <CurrenciesList
                                width={width}
                                changePopupCurrency={changePopupCurrency}/>
                        </li>
                }
            </ul>
        </div>
    );
})

export default Currencies