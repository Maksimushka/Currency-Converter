import React from 'react';
import Currencies from './Currencies/Currencies';
import {Currency} from '../redux/reducer/converter-reducer';

type ConverterViewType = {
    count: string
    onChangeFieldValue: (value: string) => void
    onChangeVisible: () => void
    changeCurrency: (currency: string) => void
    currentCurrency: string
    popupCurrency: Currency
    toggle: boolean
    changePopupCurrency: (currency: string) => void
    width: number
}

const ConverterView = (props: ConverterViewType) => {
    const {
        count, onChangeFieldValue,
        changePopupCurrency, width, toggle,
        changeCurrency, currentCurrency,
        onChangeVisible, popupCurrency
    } = props

    const onChangeFieldHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        let value = e.currentTarget.value
        onChangeFieldValue(value)
    }

    return (
        <>
            <Currencies
                width={width}
                changePopupCurrency={changePopupCurrency}
                toggle={toggle}
                popupCurrency={popupCurrency}
                changeCurrency={changeCurrency}
                currentCurrency={currentCurrency}
                onChangeVisible={() => onChangeVisible()}
            />
            <input type={'number'} value={count} onChange={onChangeFieldHandler}/>
        </>
    );
};

export default ConverterView;