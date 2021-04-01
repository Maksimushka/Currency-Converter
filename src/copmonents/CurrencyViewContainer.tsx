import {CurrencyView} from './CurrencyView';
import {useDispatch, useSelector} from 'react-redux';
import {setCurrentCurrency, setIsBuyingAC} from '../redux/actions/actions';
import {StoreRootType} from '../redux/store';

export const CurrencyViewContainer = () => {
    const dispatch = useDispatch()
    const {
        isBuying,
        currencies,
        currentCurrency,
        currentCountRUB,
        currentCountCurrency
    } = useSelector((state:StoreRootType) => state.currency)
    debugger
    const currencyRate = currencies.find(el => el.CharCode === currentCurrency)

    const changeIsBuying = (value: boolean) => dispatch(setIsBuyingAC(value))
    const changeCurrentCurrency = (value: string) => dispatch(setCurrentCurrency(value))
    const changeFieldValue = () => {

    }

    return (
        <CurrencyView
            currentCountRUB={currentCountRUB}
            currentCountCurrency={currentCountCurrency}
            currentCurrency={currentCurrency}
            currencies={currencies}
            isBuying={isBuying}
            currencyRate={currencyRate!.Value}
            changeCurrentCurrency={changeCurrentCurrency}
            changeIsBuying={changeIsBuying} />
    )
}