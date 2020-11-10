import React from "react";
import { BrowserRouter, Route } from "react-router-dom"
import "../App.css";
import WeatherDisplay from "./weather_display_main_container";
import Header from "./header/header";

function App() {
  return <>
    <header>
  <Header/>
  </header>
  <BrowserRouter>
  <Route exact path="/" component={WeatherDisplay} />
  <Route exact path="/:cityName" component={WeatherDisplay} />
  </BrowserRouter>
  </>;
}

export default App;
