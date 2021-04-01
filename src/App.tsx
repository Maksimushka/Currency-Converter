import React, {useEffect} from 'react';
import './App.scss';
import {CurrencyViewContainer} from './copmonents/CurrencyViewContainer';
import {getCurrencies} from './redux/actions/actions';
import {useDispatch, useSelector} from 'react-redux';
import {StoreRootType} from './redux/store';

function App() {
    const {loading} = useSelector((state: StoreRootType) => state.currency)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getCurrencies())
        console.log('fsadf')
    }, [dispatch])

    if (loading) {
        return null
    }

    return (
        <div className="App">
            <CurrencyViewContainer/>
        </div>
    );
}

export default App;
