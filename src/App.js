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
      second: [],
      hasFirst: false,
      hasOperator: false,
      hasSecond: false,
      hasDecimal: false
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleEquate = this.handleEquate.bind(this)
  }
    //ADD BOOLEANS EX. FIRSTNUMBERCHOSEN =FALSE, IF OPERATOR CHOSEN, FIRSTNUMBERCHOSEN=TRUE

  handleSubmit(event){
    event.preventDefault();
    var value = event.target.value
    var first = this.state.first
    var integered = parseInt(value)
    if ((Number.isInteger(integered) || integered === 0 || value === '.') && this.state.hasFirst === false){
    first.push(value)
    this.setState({first: first})
    } if (value === '+' || value === '-' || value === '*' || value === '/') {
        this.setState({operator: value, hasOperator: true, hasFirst: true})
        console.log(this.state)  
    } else if (this.state.hasFirst === true && this.state.hasOperator === true) {
      var second = this.state.second
      if (Number.isInteger(integered) || integered === 0 || value === '.'){
        second.push(value)
        this.setState({second: second})
      }
    }
  }

  handleEquate(a, x, b, e){
    e.preventDefault()
    console.log(typeof a) 
      if (x == '-'){
      this.setState({answer: parseInt(a) - parseInt(b)})
    } else if ( x == '+'){
      this.setState({answer: parseInt(a) + parseInt(b)})
    } else if ( x == '*'){
      this.setState({answer: parseInt(a) * parseInt(b)})
    }else if ( x == '/'){
      this.setState({answer: parseInt(a) / parseInt(b)})
    }
    // e.preventDefault()
    // this.setState({answer: parseInt(a + x + b)})
    // console.log(typeof 1 / 1)
    
  }
  
  render() {
    
    return (
      <div className="App">
        
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
           <button onClick={(e) => this.handleEquate(this.state.first, this.state.operator, this.state.second, e) } value='='>=</button>
           <button onClick={this.handleSubmit} value='/'>/</button>
           </div>
          </form>
          </div>
             <h4>{this.state.first}</h4>
             <h4>{this.state.operator}</h4>
             <h4>{this.state.second}</h4>
             <h3>{this.state.answer}</h3>
         </div>
    );
  }
}

export default Calculator;
