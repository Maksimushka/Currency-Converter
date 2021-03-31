import React, {useEffect} from 'react';
import './App.scss';
import {currencyAPI} from './API';
import {CurrencyViewContainer} from './copmonents/CurrencyViewContainer';

function App() {
  useEffect(() => {
    currencyAPI.getData().then((resp) => console.log(resp.Valute))
  }, [])

  return (
    <div className="App">
        <CurrencyViewContainer />
    </div>
  );
}

export default App;
