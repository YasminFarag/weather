import React, {Component} from 'react';
import './App.css';
import Forecasting from './components/Forecasting';
//import { async } from 'q';

let apiKey = 'e8543a00592ac6e69e0a81d490af4226'
class App extends Component {
   state ={
      input:'',
      city:'',
      country:'',
      temp:'',
      humidity:'',
      wind:''

    }
    // weather = async(e) =>{
    //   e.preventDefault()
    //   const city = e.target.elements.city.value;
      
      
    //   const api= await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
    
    //   const response = api.json();
    
    //   console.log(response);
    //   console.log('sys:',response.sys);
      
      
 // }
   
    weather=(e)=>{
      e.preventDefault()
    const city = e.target.elements.city.value;
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
  
  .then(res => res.json())
  .then(data=>  this.setState({
    city: data.name,
     country: data.sys.country,
    temp:data.main.temp,
    humidity:data.main.humidity,
    wind:data.wind.speed
}, () => console.log('data',data)
) 
  )
  .catch(error => console.log(error)) 
   
  
}
    handleChange=(e)=>{
      let textInput=e.target.value
      this.setState({
        input: textInput
      })
      console.log('input is : ',textInput);
      
    }
  

  render() {
    return (
      <div className="App">
      Welcome To Your Weather App
      
      <Forecasting weather={this.weather} 
                    city={this.state.city} 
                    country={this.state.country} 
                    temp={this.state.temp} 
                    humidity={this.state.humidity} 
                    wind={this.state.wind}  
                    handleChange={this.handleChange}
                    input={this.state.input} />
    </div>

    )
  }
}



export default App


