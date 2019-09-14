import React, { Component } from 'react';

class Forecasting extends Component {
state={
  display:true

}

toggleDisplay=()=>{
  this.setState({
    display: !this.state.display
  })
}
    
  render() {
    const inlineStyle= {
      width:'auto',
      height: 'auto',
      margin: '30px',
      display:'inline-block',
      padding:'7px',
      backgroundColor:'cornflowerblue',
      borderRadius:'10px',
      fontSize: '20px', 
    }
    if(this.state.display === true){


      return (
        <div>


        <form onSubmit={this.props.weather}>
            <input type='text' value={this.props.input} name="city" placeholder="City...." onChange={this.props.handleChange} />
            <button>Search</button>
            </form>
         
            <span style={inlineStyle}>
              {this.props.date && <span>{this.props.date}</span>}<br />
            {this.props.city  && <span>City: {this.props.city}</span>}<br />
            {this.props.temp && <span>Temperature: {this.props.temp}</span>}<br />
            {/* {this.props.country && <p>Country: {this.props.country}</p>} */}
            {this.props.description && <span>Description:{this.props.description}</span>}
            <img src={`http://openweathermap.org/img/wn/${this.props.icon}.png `} className="" alt="wthr-img" /><br />
            
            {this.props.humidity && <span>Humidity: {this.props.humidity} %</span>}<br />
          {this.props.wind && <span>Wind Speed: {this.props.wind} Km/hr</span>}<br />
            </span>
        </div>
      )

    }

   
  }
}

export default Forecasting
