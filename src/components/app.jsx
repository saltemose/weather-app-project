import React from "react";
import { ReactComponent as Logo } from "../images/sun.svg";
import { BrowserRouter, Route } from "react-router-dom"
import "../App.css";
import WeatherDisplay from "./weather_display_main_container";

function App() {
  return <>
  <BrowserRouter>
  <Route exact path="/" component={WeatherDisplay} />
  <Route exact path="/:cityName" component={WeatherDisplay} />
  </BrowserRouter>
  </>;
}

export default App;
