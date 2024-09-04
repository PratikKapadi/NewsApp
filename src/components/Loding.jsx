import React, { Component } from 'react'
import spinner from "./Spimmer.gif"
export default class Loding extends Component {
  render() {
    return (
      <div className='text-center'>
        <img src= {spinner} alt="loding" />
        
      </div>
    )
  }
}
