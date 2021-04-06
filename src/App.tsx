import React, {useEffect} from 'react';
import './App.scss';
import {useDispatch, useSelector} from 'react-redux';
import {CurrencyContainer} from './copmonents/ConverterContainer/ConverterContainer';
import {getCurrencies} from './redux/actions/actions';
import {storeRootType} from './redux/store';

function App() {
    const {loading} = useSelector((state: storeRootType) => state.converter)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getCurrencies())
    }, [dispatch])

    if (loading) {
        return null
    }

    return (
        <div className="App">
            <CurrencyContainer/>
        </div>
    );
}

export default App;
