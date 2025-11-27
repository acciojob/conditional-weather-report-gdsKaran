
import React from "react";
import './../styles/App.css';

const weather = {
  temp: 25,
  conditions: "Sunny",
};

const App = () => {
  return (
    <>
      <p>
        <span style={weather.temp > 20 ? { color: "red" } : null}>
          {weather.temp}
        </span>
      </p>
      <p>{weather.conditions}</p>
    </>
  );
}

export default App
