import React, { useEffect, useState } from "react";

import s from "./currency.module.css";

// Import api service for fetching currency
import { apiService } from '../../../services/api.service'

// import library for converting rates
const fx = require('./money.js')

const Currency = () => {
  const [ USDrate, SetUSDRate ] = useState(1);
  const [ EURrate, SetEURRate ] = useState(2);
  const [ RUBrate, SetRUBRate ] = useState(3);
  const [ currentCountryRate,
          SetCurrentCountryRate] = useState(4);

  function convertRates() {
    fx.settings = { from: "USD", to: "RUB" };
    SetCurrentCountryRate(fx.convert(1).toFixed(2));
  }

  async function getRates() {
    const response = await apiService.fetchPosts()

    SetUSDRate(response.rates.USD.toFixed(2))
    SetEURRate(response.rates.EUR.toFixed(2))
    SetRUBRate(response.rates.RUB.toFixed(2))
    
    fx.rates = response.rates;
    fx.base = response.base;
  }

  const promise = new Promise((resolve, reject) => {
    resolve(getRates())
    reject(new Error('Currency service is unavalable'))
  })

  useEffect(() => {
    promise.then(
      result => convertRates(),
      error => console.log(error)
    )
  }, [])

  return (
    <div className={s.currency}>
        <div className={s['rates-block']}>
          <div className={s.usd}>
            USD: {USDrate}
          </div>
          <div className={s.eur}>
            EUR: {EURrate}
          </div>
          <div className={s.rub}>
            RUB: {RUBrate}
          </div>
          <div className={s['country-currency']}>
            cC: {currentCountryRate}
          </div>
        </div>
    </div>
  );
};

export default Currency;
