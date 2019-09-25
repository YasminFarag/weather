import React, { Component } from 'react';
import './Forecasting.css';

class Forecasting extends Component {
state={
  className:'hidden result'

}

toggleDisplay=()=>{
  // if(this.state.className)
  this.setState({
    className: 'result'
  })
} 
  render() {
   
    const calculate= Math.floor(this.props.temp)
      return (
        
        <div>
        <form onSubmit={this.props.weather}>
            <input type='text' value={this.props.input} name="city" placeholder="City...." onChange={this.props.handleChange} />
            <button onClick={this.toggleDisplay}>Search</button>
                
            </form>
         {this.props.show ? <span className={this.state.className} >
              {this.props.date && <span>{this.props.date}</span>}<br />
            {this.props.city  && <span>{this.props.city},{this.props.country}</span>}<br />
            {this.props.temp && <span>Temperature: {calculate}°</span>}<br />
            {/* {this.props.country && <p>Country: {this.props.country}</p>} */}
            {this.props.description && <span>Description: {this.props.description}</span>}
            <img src={`http://openweathermap.org/img/wn/${this.props.icon}.png `} className="" alt="wthr-img" /><br />
            
            {this.props.humidity && <span>Humidity: {this.props.humidity} %</span>}<br />
          {this.props.wind && <span>Wind Speed: {this.props.wind} Km/hr</span>}<br />
            
            
            </span> : '' }
            
            </div>
       
      )

    

   
  }
}

export default Forecasting
