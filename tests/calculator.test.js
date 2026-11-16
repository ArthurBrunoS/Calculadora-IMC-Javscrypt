const { test } = require("node:test");
const assert = require("node:assert/strict");
const { Calculator } = require("../scripts.js");

function enter(calculator, value) {
  for (const digit of String(value)) calculator.addDigit(digit);
}
function sequence(...keys) {
  const calculator = new Calculator();
  for (const key of keys) {
    if (/^[0-9.]+$/.test(String(key))) enter(calculator, key);
    else calculator.processOperation(key);
  }
  return calculator;
}
test("usa o operador armazenado ao encadear operações", () => {
  assert.equal(sequence("8", "+", "2", "*", "3", "=").display, "30");
});
test("zero é um operando válido", () => {
  assert.equal(sequence("0", "*", "5", "=").display, "0");
  assert.equal(sequence("0", "-", "5", "=").display, "-5");
});
test("troca operador sem consumir um novo operando", () => {
  assert.equal(sequence("8", "+", "*", "2", "=").display, "16");
});
test("decimais e ponto duplicado", () => {
  assert.equal(sequence("0.1", "+", "0.2", "=").display, "0.3");
  assert.equal(sequence("1..2").display, "1.2");
});
test("divisão por zero e recuperação por nova entrada", () => {
  const calc = sequence("5", "/", "0", "=");
  assert.match(calc.error, /zero/);
  calc.addDigit("7");
  assert.equal(calc.display, "7");
  assert.equal(calc.error, "");
});
test("resultado pode iniciar nova conta ou continuar", () => {
  assert.equal(sequence("2", "+", "3", "=", "*", "4", "=").display, "20");
  assert.equal(sequence("2", "+", "3", "=", "4").display, "4");
});
test("CE limpa só a entrada e C reinicia a operação", () => {
  assert.equal(sequence("9", "+", "8", "CE", "2", "=").display, "11");
  const calc = sequence("9", "+", "8", "C");
  assert.equal(calc.display, "0");
  assert.equal(calc.operator, null);
});
test("DEL apaga um dígito e mantém zero quando vazio", () => {
  assert.equal(sequence("12", "DEL").display, "1");
  assert.equal(sequence("1", "DEL").display, "0");
});
