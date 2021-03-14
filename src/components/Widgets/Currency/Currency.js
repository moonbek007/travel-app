import React, { useEffect, useState, useContext } from "react";

import s from "./currency.module.css";

// Import api service for fetching currency
import { apiService, currencyAPI } from "../../../services/api.service";

import TravelAppContext from "../../context/context";
// import library for converting rates
const fx = require("./money.js");

const Currency = () => {
  const [USDrate, SetUSDRate] = useState(1);
  const [EURrate, SetEURRate] = useState(2);
  const [RUBrate, SetRUBRate] = useState(3);
  const [currentCurrency, setCurrentCurrency] = useState("");
  const { language, currency } = useContext(TravelAppContext);
  // function convertRates() {
  //   fx.settings = { from: "USD", to: "RUB" };
  //   SetCurrentCountryRate(fx.convert(1).toFixed(2));
  // }
  async function getRates(currency) {
    // const response = await apiService.fetchPosts();
    const response = await currencyAPI.fetchCurrency(await currency.name["EN"]);
    SetUSDRate(await response.rates.USD.toFixed(4));
    SetEURRate(await response.rates.EUR.toFixed(4));
    SetRUBRate(await response.rates.RUB.toFixed(4));
    setCurrentCurrency(await response.base);
    fx.rates = response.rates;
    fx.base = response.base;
  }

  const promise = new Promise((resolve, reject) => {
    resolve(getRates(currency));
    reject(new Error("Currency service is unavalable"));
  });

  // useEffect(() => {
  //   promise.then(
  //     () => convertRates(),
  //     (error) => console.log(error)
  //   ); // eslint-disable-next-line
  // }, []);

  return (
    <div className={s.currency}>
      <div className={s["rates-block"]}>
        <div className={s["country-currency"]}>
          {`${
            language === "EN"
              ? "Currency"
              : language === "РУС"
              ? "Валюта"
              : "Para birimi"
          }`}
          : {`${currency.name[language]} (${currency.symbol})`}
        </div>
        <div className={s.usd}>
          {`${language === "EN" ? "USD" : language === "РУС" ? "ДОЛ" : "DOL"}`}:{" "}
          {USDrate} $
        </div>
        <div className={s.eur}>
          {`${language === "EN" ? "EUR" : language === "РУС" ? "ЕВР" : "EUR"}`}:{" "}
          {EURrate} €
        </div>
        <div className={s.rub}>
          {`${language === "EN" ? "RUB" : language === "РУС" ? "РУБ" : "RUB"}`}:{" "}
          {RUBrate} ₽
        </div>
        {/* <div className={s["country-currency"]}>cC: {currentCountryRate}</div> */}
      </div>
    </div>
  );
};

export default Currency;
