import React from "react";
import shortInfoStyles from "./shortinfo.module.css";
function ShortInfo() {
  return (
    <div className={shortInfoStyles.countryInfo}>
      <div className={shortInfoStyles.mainPhoto}>
        <img
          src="https://www.fodors.com/wp-content/uploads/2018/10/HERO_UltimateRome_Hero_shutterstock789412159.jpg"
          alt="pic"
          width="60%"
        />
        <h3>About Rome.</h3>
        <p>
          Rome (Italian and Latin: Roma [ˈroːma] (About this soundlisten)) is
          the capital city and a special comune of Italy (named Comune di Roma
          Capitale), as well as the capital of the Lazio region. The city has
          been a major human settlement for almost three millennia. With
          2,860,009 residents in 1,285 km2 (496.1 sq mi),[1] it is also the
          country's most populated comune. It is the third most populous city in
          the European Union by population within city limits. It is the centre
          of the Metropolitan City of Rome, which has a population of 4,355,725
          residents, thus making it the most populous metropolitan city in
          Italy.[2] Its metropolitan area is the third-most populous within
          Italy.[3] Rome is located in the central-western portion of the
          Italian Peninsula, within Lazio (Latium), along the shores of the
          Tiber. Vatican City (the smallest country in the world)[4] is an
          independent country inside the city boundaries of Rome, the only
          existing example of a country within a city; for this reason Rome has
          sometimes been defined as the capital of two states
        </p>
      </div>
    </div>
  );
}

export default ShortInfo;
