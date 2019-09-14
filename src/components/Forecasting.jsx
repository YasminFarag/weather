import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';






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
    // const inlineStyle= {
    //   width:'300px',
    //   height: '100px',
    //   border: '1px solid' 
    // }
    if(this.state.display === true){


      return (
        <div>
          <form onSubmit={this.props.weather}>
            <input type='text' value={this.props.input} name="city" placeholder="City...." onChange={this.props.handleChange} />
            <button>Search</button>
  
  
            </form>
            <div className="result">
              {this.props.date && <span>{this.props.date}</span>}<br />
            {this.props.city  && <span>City: {this.props.city}</span>}<br />
            {this.props.temp && <span>Temperature: {this.props.temp}</span>}<br />
            {/* {this.props.country && <p>Country: {this.props.country}</p>} */}
            {this.props.description && <span>Description:{this.props.description}</span>}
            <img src={`http://openweathermap.org/img/wn/${this.props.icon}.png `} className="" alt="wthr-img" /><br />
            
            {this.props.humidity && <span>Humidity: {this.props.humidity} %</span>}<br />
          {this.props.wind && <span>Wind Speed: {this.props.wind} Km/hr</span>}<br />
            </div>
        </div>
      )

    }

   
  }
}

export default Forecasting
