import React, { Component, useState } from "react";
import "./Calculator.css";
import Button from "../components/Button.jsx";
import Display from "../components/Display.jsx";

const initialState = {
  displayValue: "0",
  clearDisplay: false,
  operation: null,
  values: [0, 0],
  current: 0,
};

const Calculator = () => {
  const { displayValue, clearDisplay, values, current, operation } =
    initialState;
  const [val, setval] = useState(values);
  const [atual, setatual] = useState(current);
  const [display, setDisplay] = useState(displayValue);
  const [clear, setClear] = useState(clearDisplay);
  const [op, setOp] = useState(operation);
  let state = { ...initialState };
  const empty = () => {
    setDisplay(displayValue);
    setatual(0);
  };

  const clearMemory = () => {
    empty();
    console.log(display);
  };
  const setOperation = (operation) => {
    if (atual === 0) {
      setatual(1);
      setOp(operation);
      setClear(true);
      return;
    }
    const calcular = operation === "=";
    const currentOperation = op;

    const valores = [...val];

    const Displaycontrol = () => {
      let SOop = calcular ? null : operation;
      setOp(SOop);

      let SOatual = calcular ? 0 : 1;
      setatual(SOatual);
      let CDisplay = true;
      setClear(CDisplay);
    };

    const Soma = () => {
      let somar = valores[0] + valores[1];
      valores[0] = somar;
      valores[1] = 0;

      setval(valores);
      setatual(0);
      setDisplay(valores[0]);

      Displaycontrol();
    };
    const Subtrair = () => {
      let subtrai = valores[0] - valores[1];
      valores[0] = subtrai;
      valores[1] = 0;

      setval(valores);
      setatual(0);
      setDisplay(valores[0]);

      Displaycontrol();
    };
    const Dividir = () => {
      let Divide = valores[0] / valores[1];
      valores[0] = Divide;
      valores[1] = 0;

      setval(valores);
      setatual(0);
      setDisplay(valores[0]);

      Displaycontrol();
    };
    const Multiplicar = () => {
      let Multiplica = valores[0] * valores[1];
      valores[0] = Multiplica;
      valores[1] = 0;

      setval(valores);
      setatual(0);
      setDisplay(valores[0]);

      Displaycontrol();
    };
    const Resultado = () => {
      let result = eval(`${valores[0]}${currentOperation}${valores[1]}`);
      valores[0] = result;
      valores[1] = 0;

      setval(valores);
      setatual(0);
      setDisplay(valores[0]);

      Displaycontrol();
    };

    const Calculando = (operation) => {
      switch (operation) {
        case "+":
          Soma();
          break;
        case "-":
          Subtrair();
          break;
        case "/":
          Dividir();
          break;
        case "*":
          Multiplicar();
          break;
        case "=":
          Resultado();
          break;
      }
    };
    Calculando(operation);
    let SOop = calcular ? null : operation;
    setOp(SOop);

    let SOatual = calcular ? 0 : 1;
    setatual(SOatual);
    return;
  };
  const addDigit = (n) => {
    if (n === "." && display.includes(".")) {
      return;
    }
    let CDisplay = display === "0" || clear;

    const currentState = CDisplay ? "" : display;
    var SDisplay = currentState + n;
    setDisplay(SDisplay);
    setClear(false);
    if (n !== ".") {
      const i = atual;
      const newValue = parseFloat(SDisplay);
      let valor = [...val];
      valor[i] = newValue;
      setval(valor);
    }
  };
  console.log(val);
  return (
    <div className="Calculator">
      <Display value={display} />
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
