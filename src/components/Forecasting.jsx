import React, { Component } from 'react';






class Forecasting extends Component {

    
  render() {
    // const inlineStyle= {
    //   width:'300px',
    //   height: '100px',
    //   border: '1px solid' 
    // }

    return (
      <div>
        <form onSubmit={this.props.weather}>
          <input type='text' value={this.props.input} name="city" placeholder="City...." onChange={this.props.handleChange} />
          <button>Search</button>


          </form>
          <div className="result">
            {this.props.date && <p>{this.props.date}</p>}
          {this.props.city  && <p>City: {this.props.city}</p>} 
          {/* {this.props.country && <p>Country: {this.props.country}</p>} */}
          {this.props.description && <p>Description:{this.props.description}</p>}
          {this.props.temp && <p>Temperature: {this.props.temp}</p>}
          {this.props.humidity && <p>Humidity: {this.props.humidity} %</p>}
        {this.props.wind && <p>Wind Speed: {this.props.wind} Km/hr</p>}
          </div>
      </div>
    )
  }
}

export default Forecasting
