import React, {useEffect} from 'react';
import './App.scss';
import {useDispatch, useSelector} from 'react-redux';
import {CurrencyContainer} from './copmonents/ConverterContainer/ConverterContainer';
import {getCurrencies} from './redux/actions/actions';
import {storeRootType} from './redux/store';
import {Route, Switch } from 'react-router-dom';
import ListOfCurrencies from './copmonents/ListOfCurrencies/ListOfCurrencies';
import Header from './copmonents/Header/Header';

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
            <Header />
            <Switch>
                <Route exact path={'/'} render={() => <CurrencyContainer/>} />
                <Route path={'/list'} render={() => <ListOfCurrencies/>} />
            </Switch>
        </div>
    );
}

export default App;
