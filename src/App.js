import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Calculator extends Component {
  render() {
    return (
      <div className="App">
        <h3>Answer:</h3>
         <div className='container'>
          <div >
           <button>7</button>
           <button>8</button>
           <button>9</button>
           <button>-</button>
          </div>
          <div >
           <button>4</button>
           <button>5</button>
           <button>6</button>
           <button>+</button>
          </div>
          <div >
           <button>1</button>
           <button>2</button>
           <button>3</button>
           <button>*</button>
          </div>
          <div >
           <button>0</button>
           <button>.</button>
           <button>=</button>
           <button>/</button>
           </div>
          </div>
         </div>
    );
  }
}

export default Calculator;
