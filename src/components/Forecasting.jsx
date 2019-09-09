import React, { Component } from 'react';


class Forecasting extends Component {

    
  render() {

    return (
      <div>
        <form onSubmit={this.props.result}>
          <input type='text' name="city" placeholder="City...."  />
          <button>Search</button>

          </form>
        
      </div>
    )
  }
}

export default Forecasting
