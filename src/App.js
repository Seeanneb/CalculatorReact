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
    this.handleClear = this.handleClear.bind(this)
    this.handleKeyboard = this.handleKeyboard.bind(this)
  }
    //ADD BOOLEANS EX. FIRSTNUMBERCHOSEN =FALSE, IF OPERATOR CHOSEN, FIRSTNUMBERCHOSEN=TRUE

  handleSubmit(event){
    event.preventDefault();
    var value = event.target.value
    var first = parseInt(value, 10)
    var firstArr = this.state.first.map(x => parseInt(x, 10))
    if (( Number.isInteger(first) || value === '0' || value === '.') && this.state.hasFirst === false){
     firstArr.push(first)
     firstArr.reduce((a, b) => a + b)
    console.log('after push ' + firstArr)
    this.setState({first: firstArr})

    } else if (value === '+' || value === '-' || value === '*' || value === '/') {
        this.setState({operator: value, hasOperator: true, hasFirst: true, first: firstArr})
         
    } else if (this.state.hasFirst === true && this.state.hasOperator === true) {
      var second = parseInt(value, 10)
      var secondArr = []
      if (Number.isInteger(second) || second === 0 || value === '.'){
        secondArr.push(second)
        this.setState({second: secondArr})
      }
    }
  }

  handleEquate(a, x, b, e){
    
    e.preventDefault()
    
      if (x === '-'){
      this.setState({answer: parseInt(a, 10) - parseInt(b, 10)})
    } else if ( x === '+'){
      this.setState({answer: parseInt(a, 10) + parseInt(b, 10)})
    } else if ( x === '*'){
      this.setState({answer: parseInt(a, 10) * parseInt(b, 10)})
    }else if ( x === '/'){
      this.setState({answer: parseInt(a, 10) / parseInt(b, 10)})
    }
  }
  
   handleClear(event){
    event.preventDefault();
    this.setState({
      answer: '',
      first: [],
      operator: ' ',
      second: [],
      hasFirst: false,
      hasOperator: false,
      hasSecond: false,
      hasDecimal: false
    })
  }

  handleKeyboard(event){
    var value = event.keyCode;
    console.log(value)
  }

  render() {
    
    return (
      <div className="App">
          <form>
            <button className='clear' onClick={this.handleClear}>Clear</button>
          </form>
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

//
// if this.state.first.includes('.'){
//  this.setState({hasDecimal === true})
//}
// 
//
//
//array.map into the handle equate parseInt
//
//
//


