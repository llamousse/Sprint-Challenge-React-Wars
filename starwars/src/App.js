import React, { useState, useEffect } from 'react';
import axios from "axios";
import StarWars from "./components/StarWars.js";

import './App.css';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const [ char, setChar ] = useState([]);

  useEffect(() => {
    // console.log("first render");
    axios.get("https://swapi.co/api/people/")
      .then(res => {
        console.log(res.data.results);
        setChar(res.data.results);
      })
      .catch(err => {
        console.log("Error: Could not fetch data - ", err);
      })
  }, []);

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>

      {char.map(data => (
        <StarWars name={data.name}
                  birthday={data.birth_year} /> 
      ))}

    </div>
  );
}

export default App;
