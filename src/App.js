import "./index.css";
import React, { useState, useEffect } from "react";
import Header from "./Header";

export default function App() {
  const [data, setData] = useState([]);
  const fetchDetails = () => {
    const url = "https://restcountries.com/v3.1/region/asia#";
    fetch(url)
      .then((response) => response.json())
      .then((countries) => {
        console.log(countries);
        setData(countries);
      });
  };

  // useEffect(() => {
  //   fetchDetails();
  // }, []);

  return (
    <div className="App">
      <Header />
      <button className="btn" onClick={fetchDetails}>
        Get Details
      </button>

      {data.map((c) => (
        // <div key={c.ccn3}> {c.name.map((sub)=>{
        //   <h3 className="country-name">Name: {sub.common}</h3>
        // })}
        <div className="note" key={c.ccn3}>
          <img src={c.flags.png} alt={c.flags.png}></img>
          <h1>{c.name.common}</h1>

          <p>Capital: {c.capital}</p>

          <p>Region: {c.region}</p>
          <p>Subregion: {c.subregion}</p>
          <p>Population: {c.population}</p>
          <p>Borders: {c.borders}</p>
          {/* <p>Languages: {c.languages.map((sub)=>{ */}
          {/* <ul>
                  <li>{}</li>
                </ul>
            })}</p> */}
        </div>
      ))}
    </div>
  );
}
