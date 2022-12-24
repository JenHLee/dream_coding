// Function
// - funcdamental building block in the program
// - subprogram can be used multiple times (재사용 가능)
// - performs a task or calculates a value (한가지의 task, 어떤 값 계산 위해 사용)

// 1. Function declaration
// function name(param1, param2) { body... return; }
// one function === one thing (하나의 함수 = 하나의 일만 사용하도록)
// naming: doSomething, command, verb (함수는 동사형태로 이름 지정)
// e.g. createCardAndPoint -> createCard, createPoint
// function is object in JS (함수가 object로 간주되기 때문에 이를 변수에다 할당, parameter로 전달, return 할 수 있음)

function printHello() {
  console.log("Hello");
}
printHello();

// JavaScript에는 type이 없음 -> string, number 다 보낼 수 있음.
function log(message) {
  console.log(message);
}
log("Hello@"); // Hello@
log(1234); //1234

// TypeScript Example
/*
function tsLog(message: string) : number { // message(parameter 매개변수의 type을 지정해주어야함 : string) : number 리턴값의 type 설정
    console.log(message);
    return 0; // return 값을 설정해놓았을때, return이 없으면 오류
}
*/

// JavaScript Example (TypeScript의 변환)
("use strict");
function jsLog(message) {
  console.log(message);
  return 0;
}

jsLog("Hello jsLog"); // Hello jsLog

// 2. Parameters
// premitive parameters: passed by value
// object parameters: passed by reference
function changeName(obj) {
  obj.name = "coder";
}
const ellie = { name: "ellie" };
changeName(ellie);
console.log(ellie); // {name: 'coder'}

// 3. Default parameters (added in ES6)
function showMessage(message, from) {
  console.log(`${message} by ${from}`);
}
showMessage("Hi!"); // Hi! by undefined

function showMessageUnknown(message, from = "unknown") {
  // 이런식으로 옆에 적어도 됨 (default setting)
  console.log(`${message} by ${from}`);
}
showMessageUnknown("Hi!"); // Hi! by unknown
/*
function showMessageUnknown (message, from){
    if (from === undefined){
        from = 'unknown';
    }
    console.log(`${message} by ${from}`);
}
showMessageUnknown('Hi!'); // Hi! by unknown
*/

// 4. Rest parameters (added in ES6)
function printAll(...args) {
  // ...args는 현재 3개의 값이 담겨져있는 배열 (array)
  for (let i = 0; i < args.length; i++) {
    console.log(args[i]);
  }

  // simple version
  for (const arg of args) {
    //args의 모든 arg(값)이 차례로 출력
    console.log(arg);
  }

  // the best simplest version
  args.forEach((arg) => console.log(arg));
}
printAll("dream", "coding", "ellie"); // 인자 총 3개 전달

// 5. Local scope
// 원칙! 밖에서는 안이 보이지 않고, 안에서만 밖을 볼 수 있다
let globalMessage = "global"; // global variable
function printMessage() {
  let message = "hello";
  console.log(message); // local variable
  console.log(globalMessage);
  function printAnother() {
    console.log(message);
    let childMessage = "hello";
  }
  //console.log(childMessage); // error!
  return undefined; // return 이 없는 함수는 이것과 똑같음 (생략 가능)
}
printMessage();
//console.log(message); // error!

// 6. Return a value
function sum(a, b) {
  return a + b;
}

const result = sum(1, 2); // 3
console.log(`sum: ${sum(1, 2)}`); // sum: 3
console.log(`sum: ${result}`); // sum: 3

// 7. Early return, early exit
// bad
function upgradeUser(user) {
  if (user.point > 10) {
    // long upgrade logic...
  }
}

// good
function upgradeUser(user) {
  if (user.point <= 10) {
    return; // 종료 exit
  }
  // long upgrade logic...
}

// First-class function
// functions are treated like any other variable
// can be assigned as a value to variable
// can be passed as an argument to other funtions.
// can be returned by another function

// 1. Function expression
// a function declaration can be called earlier than it is defined. (hosted = var처럼)
// a function expression is created when the execution reaches it.
const print = function () {
  // anonymous function <-> named function
  console.log("print");
};
print(); // print
// const 재할당 (declaration된 함수들의 경우, var처럼 hosting이 되어 함수를 선언하기 이전에 사용해도 가능함)
const printAgain = print; // print 함수를 printAgain으로 재 할당
printAgain(); // print
const sumAgain = sum; // 위에서 지정한 함수 sum을 sumAgain으로 재 할당
console.log(sumAgain(1, 3)); // 4

// 2. Callback function using function expression
function randomQuiz(answer, printYes, printNo) {
  if (answer === "love you") {
    printYes();
  } else {
    printNo();
  }
}

// anonymous function
const printYes = function () {
  console.log("yes!");
};

// named function
// better debugging in debugger's stack traces
// recurisions
const printNo = function print() {
  console.log("no!");
  // print(); callback 지옥 (call stack size exceeded)
};

randomQuiz("wrong", printYes, printNo);
randomQuiz("love you", printYes, printNo);

// Arrow function
// always anonymous
const simplePrint = () => console.log("simplePrint!");
const add = (a, b) => a + b;

// IIFE: Immediately Invoked Function Expression : 바로 실행!
(function hello() {
  console.log("IIFE");
})();

// Quiz function calculate (command, a, b)
// command: add, substract, divide, multiply, remainder

function calculate(command, a, b) {
  switch (command) {
    case "add":
      return a + b;
    case "substact":
      return a - b;
    case "divide":
      return a / b;
    case "multiply":
      return a * b;
    case "remainder":
      return a % b;
    default:
      throw Error("unknown command");
  }
}

console.log(calculate("add", 2, 3));
