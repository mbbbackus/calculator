import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import {functions, defaultState} from '../variables';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = defaultState;
  }
  onInputOne() {
    return this.state.function.symbol == null;
  }
  stripZeroes = (str) => {
    if (str[0] == '0')
      return this.stripZeroes(str.substring(1,str.length));
    return str;
  }
  addDigit = (event) => {
    let digit = event.target.value.toString();
    let update = {};

    if (this.state.result != null) {
      update = defaultState;
      update.inputOne = digit;
    } else if (this.onInputOne()) {
      update.inputOne = this.stripZeroes(this.state.inputOne.concat(digit));
    } else {
      let y = this.state.inputTwo;
      if (y == null)
        y = "";
      update.inputTwo = this.stripZeroes(y.concat(digit));
    }
    this.setState(update);
  }
  removeDigit = () => {
    let update = {};
    let targetInput = "inputTwo";
    if (this.onInputOne()) 
      targetInput = "inputOne";
    let input = this.state[targetInput];
    update[targetInput] = input.substring(0,input.length - 1);
    this.setState(update);
  }
  addDecimal = () => {
    let update = {};
    let targetInput = "inputTwo";
    if (this.onInputOne()) 
      targetInput = "inputOne";
    let input = this.state[targetInput];
    update[targetInput] = input.concat('.');
    this.setState(update);
  }
  applyFunction = (event) => {
    this.setState({function:this.state.functions[event.target.value]});
  }
  calcResult = () => {
    let x = parseFloat(this.state.inputOne);
    let y = parseFloat(this.state.inputTwo);
    let result = this.state.function.fct(x,y);
    this.setState({result:result});
  }
  renderResult = () => {
    let x = this.state.inputOne;
    let y = this.state.inputTwo;
    let f = this.state.function.symbol;
    let r = this.state.result;
    return <span>{x} {f != null && f} {y != null && y} {r != null && '= ' + r}</span>;
  }
  renderDigitButtons = () => {
    return [...Array(10).keys()].splice(1,10).map(i => 
      <span>
        <Button className="calc-button" onClick={this.addDigit} value={i}>{i}</Button>
        {i % 3 == 0 && <br/>}
      </span>
    );
  }

  render () {
    return (
      <div>
        {this.renderResult()}
        <br/>
        <div className="d-inline-block mr-2">
          {this.renderDigitButtons()}
          <Button className="calc-button" onClick={this.addDigit} value={0}>0</Button>
        </div>
        <div className="d-inline-block">
          <Button className="calc-button" onClick={this.removeDigit}>&larr;</Button>
          <Button className="calc-button" onClick={this.calcResult}>=</Button><br/>
          <Button className="calc-button" onClick={this.applyFunction} value={1}>+</Button>
          <Button className="calc-button" onClick={this.applyFunction} value={2}>-</Button><br/>
          <Button className="calc-button" onClick={this.applyFunction} value={3}>*</Button>
          <Button className="calc-button" onClick={this.applyFunction} value={4}>/</Button><br/>
          <Button className="calc-button" onClick={this.applyFunction} value={5}>^</Button>
          <Button className="calc-button" onClick={this.addDecimal} value={4}>.</Button><br/>
        </div>
      </div>
    );
  }
}

export default Calculator;
