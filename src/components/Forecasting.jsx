import React, { Component } from 'react';
import {apiKey} from './token.js'

class Forecasting extends Component {
    componentDidMount(){
        fetch('http://api.openweathermap.org/data/2.5/weather?q=&APPID=&units=metric')
    }
  render() {

    return (
      <div>

          <input type='text' />
          <button>Search</button>
        
      </div>
    )
  }
}

export default Forecasting
