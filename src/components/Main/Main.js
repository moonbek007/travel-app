import React from "react";
import Card from "./Card/Card";
import s from "./main.module.css";

// just data emulation
import imgUrl from "../../tmp-data/australia.jpg";
const dataEmulation = [];
for (let i = 0; i < 8; i++) {
  dataEmulation.push({
    imgUrl,
    country: `${i+1}Countryyyy`,
    capital: `${i+1}Capital`, 
  });
}
// ---/just data emulation

const Main = () => {

  const addCard = () => {
    return dataEmulation.map((data, idx) => {
      return (
        <Card
          imgUrl={data.imgUrl}
          country={data.country}
          capital={data.capital}
          key={idx}
        />
      );
    });
  };
  
  return (
    <main>
      <div className={s.cards_container}>
        {addCard()}
      </div>
    </main>
  );
};

export default Main;