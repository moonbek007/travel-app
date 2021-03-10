import React from "react";

// the link to the main page should locate in the header logo
import { Link } from "react-router-dom";

const CountryPage = () => {
  return (
    <Link to='/'> 
      <h1 style={{ backgroundColor: 'green' }}>
        Test. Click me to retrun to main
      </h1>
    </Link>
  );
};

export default CountryPage;