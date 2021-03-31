import {CurrencyView} from './CurrencyView';
import {useDispatch, useSelector} from 'react-redux';
import {setCurrentCurrency, setIsBuyingAC} from '../redux/actions/actions';
import {StoreRootType} from '../redux/store';

export const CurrencyViewContainer = () => {
    const dispatch = useDispatch()
    const {
        isBuying,
        currencies,
        currentCurrency
    } = useSelector((state:StoreRootType) => state.currency)

    const changeIsBuying = (value: boolean) => dispatch(setIsBuyingAC(value))
    const changeCurrentCurrency = (value: string) => dispatch(setCurrentCurrency(value))

    return (
        <CurrencyView
            currentCurrency={currentCurrency}
            currencies={currencies}
            isBuying={isBuying}
            changeCurrentCurrency={changeCurrentCurrency}
            changeIsBuying={changeIsBuying} />
    )
}