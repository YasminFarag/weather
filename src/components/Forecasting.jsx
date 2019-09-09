import React, { Component } from 'react';


class Forecasting extends Component {

    
  render() {

    return (
      <div>
        <form onSubmit={this.props.result}>
          <input type='text' name="city" placeholder="City...."  />
          <button>Search</button>


          </form>

          {this.props.city  && <p>City:{this.props.city}</p>} 
          {this.props.country && <p>country{this.props.country}</p>}
          {this.props.temp && <p>Temperature{this.props.temp}</p>}
          {this.props.humidity && <p>Humidity {this.props.humidity}</p>}
          {this.props.wind && <p>Wind Speed {this.props.wind}</p>}
        
      </div>
    )
  }
}

export default Forecasting
