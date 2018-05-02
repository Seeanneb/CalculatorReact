import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Calculator extends Component {
  constructor(props){
    super(props);
    this.state = {
      answer: '',
      first: [],
      operator: ' ',
      second: []
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(event){
    event.preventDefault();
    var value = event.target.value
    var first = this.state.first
    var integered = parseInt(value)
    if (Number.isInteger(integered) || integered === 0 || value === '.'){
    first.push(value)
    this.setState({first: first})
    } else if (value === '+' || value === '-' || value === '*' || value === '/') {
        this.setState({operator: value})
        console.log(this.state.operator)  
    } else if (this.state.operator != '') {
      var second = this.state.second
      if (Number.isInteger(integered) || integered === 0 || value === '.'){
        second.push(value)
        this.setState({second: second})
      }
    }
  }

  render() {
    
    return (
      <div className="App">
        <h4>{this.state.first}</h4>
        <h4>{this.state.operator}</h4>
        <h4>{this.state.second}</h4>
        <h3>Answer: {this.state.answer}</h3>
         <div className='container'>
         <form>
          <div >
           <button onClick={this.handleSubmit} value='7'>7</button>
           <button onClick={this.handleSubmit} value='8'>8</button>
           <button onClick={this.handleSubmit} value='9'>9</button>
           <button onClick={this.handleSubmit} value='-'>-</button>
           </div>
          <div >
           <button onClick={this.handleSubmit} value='4'>4</button>
           <button onClick={this.handleSubmit} value='5'>5</button>
           <button onClick={this.handleSubmit} value='6'>6</button>
           <button onClick={this.handleSubmit} value='+'>+</button>
          </div>
          <div >
           <button onClick={this.handleSubmit} value='1'>1</button>
           <button onClick={this.handleSubmit} value='2'>2</button>
           <button onClick={this.handleSubmit} value='3'>3</button>
           <button onClick={this.handleSubmit} value='*'>*</button>
          </div>
          <div >
           <button onClick={this.handleSubmit} value='0'>0</button>
           <button onClick={this.handleSubmit} value='.'>.</button>
           <button onClick={this.handleSubmit} value='='>=</button>
           <button onClick={this.handleSubmit} value='/'>/</button>
           </div>
          </form>
          </div>
         </div>
    );
  }
}

export default Calculator;
