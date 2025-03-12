function add(num1, num2) {
  let sum = num1 + num2;

  return sum;
}
function subtract(num1, num2) {
  let difference = num1 - num2;
  return difference;
}
function multiply(num1, num2) {
  let product = num1 * num2;
  return product;
}
function divide(num1, num2) {
  let result = num1 / num2;
  return result;
}
function operate(num1, num2, operator) {
  let result;
  switch (operator) {
    case `+`:
      result = add(num1, num2);

      return result;

      break;
    case `-`:
      result = subtract(num1, num2);
      return result;
      break;
    case `*`:
      result = multiply(num1, num2);
      return result;
      break;
    case `/`:
      result = divide(num1, num2);
      return result;
      break;
  }
}

function displayOnClick() {
  let number1 = ``;
  let number2 = ``;
  let operator = ``;
  let operatorCount = 0;
  let result;
  const display = document.querySelector(".display");
  const one = document.querySelector("#one");
  one.addEventListener("click", () => {
    if (operatorCount == 0) {
      number2 = "";
      number1 = number1 + "1";
      display.textContent = number1;
    } else if (operatorCount == 1) {
      number2 = number2 + "1";
      display.textContent = number2;
    }
  });

  const two = document.querySelector("#two");
  two.addEventListener("click", () => {
    if (operatorCount == 0) {
      number2 = "";
      number1 = number1 + "2";
      display.textContent = number1;
    } else if (operatorCount == 1) {
      number2 = number2 + "2";
      display.textContent = number2;
    }
  });
  const three = document.querySelector("#three");
  three.addEventListener("click", () => {
    if (operatorCount == 0) {
      number2 = "";
      number1 = number1 + "3";
      display.textContent = number1;
    } else if (operatorCount == 1) {
      number2 = number2 + "3";
      display.textContent = number2;
    }
  });
  const four = document.querySelector("#four");
  four.addEventListener("click", () => {
    if (operatorCount == 0) {
      number2 = "";
      number1 = number1 + "4";
      display.textContent = number1;
    } else if (operatorCount == 1) {
      number2 = number2 + "4";
      display.textContent = number2;
    }
  });
  const five = document.querySelector("#five");
  five.addEventListener("click", () => {
    if (operatorCount == 0) {
      number2 = "";
      number1 = number1 + "5";
      display.textContent = number1;
    } else if (operatorCount == 1) {
      number2 = number2 + "5";
      display.textContent = number2;
    }
  });
  const six = document.querySelector("#six");
  six.addEventListener("click", () => {
    if (operatorCount == 0) {
      number2 = "";
      number1 = number1 + "6";
      display.textContent = number1;
    } else if (operatorCount == 1) {
      number2 = number2 + "6";
      display.textContent = number2;
    }
  });
  const seven = document.querySelector("#seven");
  seven.addEventListener("click", () => {
    if (operatorCount == 0) {
      number2 = "";
      number1 = number1 + "7";
      display.textContent = number1;
    } else if (operatorCount == 1) {
      number2 = number2 + "7";
      display.textContent = number2;
    }
  });
  const eight = document.querySelector("#eight");
  eight.addEventListener("click", () => {
    if (operatorCount == 0) {
      number2 = "";
      number1 = number1 + "8";
      display.textContent = number1;
    } else if (operatorCount == 1) {
      number2 = number2 + "8";
      display.textContent = number2;
    }
  });
  const nine = document.querySelector("#nine");
  nine.addEventListener("click", () => {
    if (operatorCount == 0) {
      number2 = "";
      number1 = number1 + "9";
      display.textContent = number1;
    } else if (operatorCount == 1) {
      number2 = number2 + "9";
      display.textContent = number2;
    }
  });
  const zero = document.querySelector("#zero");
  zero.addEventListener("click", () => {
    if (operatorCount == 0) {
      number2 = 0;
      number1 = number1 + "0";
      display.textContent = number1;
    } else if (operatorCount == 1) {
      number2 = number2 + "0";
      display.textContent = number2;
    }
  });
  const plus = document.querySelector("#plus");
  plus.addEventListener("click", () => {
    if (operatorCount == 1 && number1 !== `` && number2 !== ``) {
      result = mainFunction(number1, number2, operator);

      number1 = result;
      number2 = "";
      display.textContent = number1;
      operator = "+";
      operatorCount = 0;
    } else {
      operatorCount++;
      operator = "+";
    }
  });
  const minus = document.querySelector("#minus");
  minus.addEventListener("click", () => {
    if (operatorCount == 1 && number1 !== `` && number2 !== ``) {
      result = mainFunction(number1, number2, operator);
      number1 = result;
      number2 = "";
      display.textContent = number1;
      operator = "-";
      operatorCount = 0;
    } else {
      operatorCount++;
      operator = "-";
    }
  });
  const multiply = document.querySelector("#multiply");
  multiply.addEventListener("click", () => {
    if (operatorCount == 1 && number1 !== `` && number2 !== ``) {
      result = mainFunction(number1, number2, operator);
      number1 = result;
      number2 = "";
      display.textContent = number1;
      operator = "*";
      operatorCount = 0;
    } else {
      operatorCount++;
      operator = "*";
    }
  });
  const divide = document.querySelector("#divide");
  divide.addEventListener("click", () => {
    if (operatorCount == 1 && number1 !== `` && number2 !== ``) {
      result = mainFunction(number1, number2, operator);
      number1 = result;
      number2 = "";
      display.textContent = number1;
      operator = "/";
      operatorCount = 0;
    } else {
      operatorCount++;
      operator = "/";
    }
  });
  const equals = document.querySelector("#equals");
  equals.addEventListener("click", () => {
    if (number1 === `` || number2 === ``) {
    } else if (operator === "/" && number2 === `0`) {
      display.textContent = "syntax error";
      number2 = "";
      number1 = "";
    } else {
      result = mainFunction(number1, number2, operator);
      number1 = result;
      number2 = "";
      operatorCount = 0;
      display.textContent = number1;
    }
  });
  const clear = document.querySelector("#clear");
  clear.addEventListener("click", () => {
    number1 = "";
    number2 = "";
    display.textContent = number1;
  });
}

function mainFunction(num1, num2, op) {
  let number1 = parseInt(num1);
  let number2 = parseInt(num2);
  let result = operate(number1, number2, op).toString();

  return result;
}
displayOnClick();
