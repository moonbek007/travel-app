import React, { useEffect, useState } from "react";

import s from "./currency.module.css";

// Import api service for fetching currency
import { apiService } from '../../../services/api.service'

const Currency = () => {

  const [ USDrate, SetUSDRate ] = useState(1);
  const [ EURrate, SetEURRate ] = useState(2);
  const [ RUBrate, SetRUBRate ] = useState(3);

  async function getRates() {
    const response = await apiService.fetchPosts()

    SetUSDRate(response.rates.USD)
    SetEURRate(response.rates.EUR)
    SetRUBRate(response.rates.RUB)
    
    // console.log(response.rates)
  }

  useEffect(() => {
    getRates()
  }, [])


  return (
    <div className={s.currency}>
        <h4>
          currency
        </h4>
        <div className={s['rates-block']}>
          <div className={s['usd']}>
            USD: {USDrate}
          </div>
          <div className={s['eur']}>
            EUR: {EURrate}
          </div>
          <div className={s['rub']}>
            RUB: {RUBrate}
          </div>
        </div>
    </div>
  );
};

export default Currency;
