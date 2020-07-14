import React, { Component } from 'react';
import {functions, defaultState} from '../variables';
import Calculator from '../components/Calculator';

class CalculatorContainer extends Component {
  constructor(props) {
    super(props);
    this.state = defaultState;
    this.addDigit = this.addDigit.bind(this);
    this.removeDigit = this.removeDigit.bind(this);
    this.removeDigit = this.removeDigit.bind(this);
    this.calcResult = this.calcResult.bind(this);
    this.applyFunction = this.applyFunction.bind(this);
    this.addDecimal = this.addDecimal.bind(this);
  }
  onInputOne() {
    return this.state.function.symbol == null;
  }
  stripZeroes (str) {
    if (str[0] == '0')
      return this.stripZeroes(str.substring(1,str.length));
    return str;
  }
  addDigit (event) {
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
  removeDigit () {
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
  render () {
    return (
      <Calculator
        inputOne={this.state.inputOne}
        inputTwo={this.state.inputTwo}
        functionSymbol={this.state.function.symbol}
        result={this.state.result}
        renderResult={this.renderResult}
        addDigit={this.addDigit}
        removeDigit={this.removeDigit}
        calcResult={this.calcResult}
        applyFunction={this.applyFunction}
        addDecimal={this.addDecimal}
      />
    );
  }
}

export default CalculatorContainer;
