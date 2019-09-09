import React, {Component} from 'react';
import './App.css';
import Forecasting from './components/Forecasting';
// import { async } from 'q';


class App extends Component {

  
  // fetch(`http://api.openweathermap.org/data/2.5/weather?q=&APPID${apiKey}=&units=metric`)
  
  // .then(res => console.log(res))
  // .then(data=> console.log(data);
  
      
 
  // )

  // .catch(error => console.log(error))      


weather = async(e) =>{
  e.preventDefault()
  // const city = e.target.elements.city.value
  const api= await fetch(`http://api.openweathermap.org/data/2.5/weather?q=berlin&APPID=${apiKey}&units=metric`)

  const respond = api.json()

  console.log(respond);
  
}

  render() {
    return (
      <div className="App">
      Welcome To Your Weather App
      
      <Forecasting result={this.weather}  />
    </div>

    )
  }
}

let apiKey = 'e8543a00592ac6e69e0a81d490af4226'

export default App


