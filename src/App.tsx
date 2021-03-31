import React, {useEffect} from 'react';
import './App.scss';
import {CurrencyViewContainer} from './copmonents/CurrencyViewContainer';
import {getCurrencies} from './redux/actions/actions';
import {useDispatch} from 'react-redux';

function App() {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getCurrencies())
    }, [dispatch])

    return (
        <div className="App">
            <CurrencyViewContainer/>
        </div>
    );
}

export default App;
