import {CurrencyView} from './CurrencyView';
import {useDispatch, useSelector} from 'react-redux';
import {setIsBuyingAC} from '../redux/actions/actions';
import {StoreRootType} from '../redux/store';

export const CurrencyViewContainer = () => {
    const dispatch = useDispatch()
    const {
        isBuying,
        currencies
    } = useSelector((state:StoreRootType) => state.currency)

    const changeIsBuying = (value: boolean) => dispatch(setIsBuyingAC(value))

    return (
        <CurrencyView currencies={currencies} isBuying={isBuying} changeIsBuying={changeIsBuying} />
    )
}