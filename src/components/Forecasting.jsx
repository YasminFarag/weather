import React, { Component } from 'react';
import {apiKey} from './token.js'

class Forecasting extends Component {

    state={
        input:''
    }
    componentDidMount(){
        const api= apiKey
        const url= `http://api.openweathermap.org/data/2.5/weather?q=&APPID${api}=&units=metric'
        fetch()
        .then(res => console.log(res))
        .then(data=> console.log(data))
            this.setState({ input : data

            })
        
        
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
