import React, {Component} from 'react';
import './App.css';
import Forecasting from './components/Forecasting';
//import { WiDaySunny } from 'weather-icons-react';

class App extends Component {
   state ={
      input:'',
      date: '',
      city:'',
      country:'',
      description:'',
      temp:'',
      humidity:'',
      wind:'',
      icon:'',
      show: false,
      

    }
    
    weather=(e)=>{
      e.preventDefault()
    const city = e.target.elements.city.value;
    fetch(`https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
  
  .then(res => res.json())
  .then(data=>  this.setState({
    
        date: new Date(),
        city: data.name,
        country: data.sys.country,
        description: data.weather[0].description,
        icon : data.weather[0].icon,
        temp:data.main.temp,
        humidity:data.main.humidity,
        wind:data.wind.speed,
        input:'',
        show:true,
    
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

    componentDidMount(){
      this.setState({
        date:''
      })

    }

    
  render() {
    // if(this.state.description=== 'sunny'){
    //   return(
    //    <img src={`http://openweathermap.org/img/w/${this.state.icon}.png`} />
    //   )
    // }
    
    return (
      <div className={"App "+ (this.state.description)} >
        Welcome to Your weather App
       
      <Forecasting weather={this.weather} 
                    date={this.state.date.toLocaleString()}
                    city={this.state.city} 
                    country={this.state.country} 
                    description={this.state.description}
                    icon={this.state.icon}
                    temp={this.state.temp} 
                    humidity={this.state.humidity} 
                    wind={this.state.wind}  
                    handleChange={this.handleChange}
                    input={this.state.input}
                    show={this.state.show} />
                    
    </div>

    )
  }
}

let apiKey = 'e8543a00592ac6e69e0a81d490af4226'

export default App


