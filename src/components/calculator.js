import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';

const Calculator = (props) => {
  const renderedDigitButtons = [...Array(10).keys()].splice(1,10).map(i => 
      <span>
        <Button className="calc-button" onClick={props.addDigit} value={i}>{i}</Button>
        {i % 3 == 0 && <br/>}
      </span>
  );
  let x = props.inputOne;
  let y = props.inputTwo;
  let f = props.functionSymbol;
  let r = props.result;
  const renderedResult = ( 
    <span>
      {x} {f != null && f} {y != null && y} {r != null && '= ' + r}
    </span>
  );

  return (
    <div>
      {renderedResult}
      <br/>
      <div className="d-inline-block mr-2">
        {renderedDigitButtons}
        <Button className="calc-button" onClick={props.addDigit} value={0}>0</Button>
      </div>
      <div className="d-inline-block">
        <Button className="calc-button" onClick={props.removeDigit}>&larr;</Button>
        <Button className="calc-button" onClick={props.calcResult}>=</Button><br/>
        <Button className="calc-button" onClick={props.applyFunction} value={1}>+</Button>
        <Button className="calc-button" onClick={props.applyFunction} value={2}>-</Button><br/>
        <Button className="calc-button" onClick={props.applyFunction} value={3}>*</Button>
        <Button className="calc-button" onClick={props.applyFunction} value={4}>/</Button><br/>
        <Button className="calc-button" onClick={props.applyFunction} value={5}>^</Button>
        <Button className="calc-button" onClick={props.addDecimal} value={4}>.</Button><br/>
      </div>
    </div>
  );
}

export default Calculator;
