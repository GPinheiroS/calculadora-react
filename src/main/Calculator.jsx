import React, { Component, useState } from "react";
import "./Calculator.css";
import Button from "../components/Button.jsx";
import Display from "../components/Display.jsx";
import { getAllByLabelText } from "@testing-library/react";

const clearMemory = () => {
  console.log("limpar");
};
const setOperation = (operation) => {
  console.log(operation);
};
const addDigit = (n) => {
  console.log(n);
};

const Calculator = () => {
  //   const botoes = [
  //     "AC",
  //     "/",
  //     "7",
  //     "8",
  //     "9",
  //     "*",
  //     "4",
  //     "5",
  //     "6",
  //     "-",
  //     "1",
  //     "2",
  //     "3",
  //     ".",
  //     "=",
  //   ];

  //   const [data, setData] = useState("0");

  //   const printarNaTela = (display) => {
  //     setData(display);
  //     console.log(data);
  //   };

  return (
    <div className="Calculator">
      <Display value="0" />
      <Button label="AC" click={() => clearMemory()} triple />
      <Button label="/" click={(o) => setOperation(o)} operation />
      <Button label="7" click={(n) => addDigit(n)} />
      <Button label="8" click={(n) => addDigit(n)} />
      <Button label="9" click={(n) => addDigit(n)} />
      <Button label="*" click={(o) => setOperation(o)} operation />
      <Button label="4" click={(n) => addDigit(n)} />
      <Button label="5" click={(n) => addDigit(n)} />
      <Button label="6" click={(n) => addDigit(n)} />
      <Button label="-" click={(o) => setOperation(o)} operation />
      <Button label="1" click={(n) => addDigit(n)} />
      <Button label="2" click={(n) => addDigit(n)} />
      <Button label="3" click={(n) => addDigit(n)} />
      <Button label="+" click={(o) => setOperation(o)} operation />
      <Button label="0" click={(n) => addDigit(n)} double />
      <Button label="." click={(n) => addDigit(n)} />
      <Button label="=" click={(o) => setOperation(o)} operation />
    </div>
  );
};

export default Calculator;
