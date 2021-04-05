import React, {useEffect} from 'react';
import './App.scss';
import {getCurrencies} from './redux/actions/actions';
import {useDispatch, useSelector} from 'react-redux';
import {CurrencyContainer} from './copmonents/ConverterContainer/ConverterContainer';
import {NewStoreRootType} from './redux/newStore';

function App() {
    const {loading} = useSelector((state: NewStoreRootType) => state.converter)
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
