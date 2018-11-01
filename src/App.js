import React, { Component } from 'react';
import './App.css';
import Titles from "./components/Titles";
import Form from "./components/Form";
import Weather from "./components/Weather";
import 'bootstrap/dist/css/bootstrap.min.css';
const API_KEY = "3585775f387b0d0cba6c5b3dc41b8167";
class App extends React.Component {
  state = {
      temperature: undefined,
      city: undefined,
      country: undefined,
      humidity: undefined,
      description: undefined,
      error: undefined
          }
getWeather = async (e) => {
  e.preventDefault();
  const city= e.target.elements.city.value;
const country =e.target.elements.country.value;
  const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
const data = await api_call.json();
console.log(data);
  if (city  && country) 
      {
      if ( data.base  )
{
this.setState ( {
  temperature: data.main.temp,
  city: data.name,
  country: data.sys.country,
  humidity: data.main.humidity,
  description: data.weather[0].description,
  error: "Error"
});
}    
      else
      {
        this.setState (
          {
            temperature: undefined,
            city: undefined,
            country: undefined,
            humidity: undefined,
            description: undefined,
              error: "No Data Found" });
      }
    }
else if (city)
{
  this.setState (
{
  temperature: undefined,
  city: undefined,
  country: undefined,
  humidity: undefined,
  description: undefined,
    error: "Please Enter Country" });
}
else if (country)
{
  this.setState (
    {
      temperature: undefined,
      city: undefined,
      country: undefined,
      humidity: undefined,
      description: undefined,
        error: "Please Enter City" });
}
else 
{
  this.setState (
    {
      temperature: undefined,
      city: undefined,
      country: undefined,
      humidity: undefined,
      description: undefined,
        error: "Please Enter Value" });
}
}
  render() {
    return (
      <div className="App">
<div>
        <div className="wrapper">
            <div className="container">
              <div className="row">
                <div className="col-xs-5 title-container">
                  <Titles />
                </div>
                <div className="col-xs-7 form-container">
                  <Form getWeather={this.getWeather} />
                  <Weather 
                    temperature={this.state.temperature} 
                    humidity={this.state.humidity}
                    city={this.state.city}
                    country={this.state.country}
                    description={this.state.description}
                    error={this.state.error}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default App;
