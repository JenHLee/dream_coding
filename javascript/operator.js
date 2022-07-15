// 1. String concatenation
console.log('my' + ' cat');
console.log('1' + 2); //12
console.log(`string literals: 1 + 2 = ${1 + 2}`); //string literals: 1 + 2 = 3 
console.log(`string literals: 

''''
1 + 2 = ${1 + 2}`); //space, enter, ' 모두 표현가능

console.log("ellie\'s \n\tbook"); //' single quote 표현 원래 불가능, 이를 가능하게 하기 위해선 \' , \n은 줄바꿈 , \t는 tab

// 2. Numeric operators
console.log(1 + 1); // add
console.log(1 - 1); // substract 
console.log(1 / 1); // divide
console.log(1 * 1); // multiply
console.log(5 % 2); // remainder
console.log(2 ** 3); // exponentiation 2의 3승

// 3. Increment and decrement operator
let counter = 2;
const preIncrement = ++counter; //3
// counter = counter + 1;
// preIncrement = counter;
console.log(`preIncrement: ${preIncrement}, counter: ${counter}`); // preIncrement: 3, counter: 3
const postIncrement = counter++; //3
console.log(`postIncrement: ${postIncrement}`); // 3
// postIncrement = counter;
// counter = counter  + 1;
console.log(`postIncrement: ${postIncrement}, counter: ${counter}`); // postIncrement: 3, counter: 4

// 4. Assignment operators
let x = 3;
let y = 6;
x += y; // x = x + y -> 3 + 6 = 9 -> x = 9
x -= y; // x = x - y -> 9 - 6 = 3 -> x = 3
x *= y; // x = x * y -> 3 * 6 = 18 -> x = 18
x /= y; // x = x / y -> 18 / 6 = 3 -> x = 3

// 5. Comparison operators
console.log(10 < 6); // less than // false
console.log(10 <= 6); // less than or equal // false
console.log(10 > 6); // greater than // true
console.log(10 >= 6); // greater than or eqaul // true

// 6. Logical operators: || (or), && (and), ! (not)
const value1 = false;
const value2 = 4 < 2; // false

// || (or), finds the first truthy value
console.log(`or: ${value1 || value2 || check()}`); // fasle || false || true => 조건들 중 하나라도 true 이면 true 결과 true

// && (and), finds the first falsy value 
console.log(`and: ${value1 && value2 && check()}`); // false || false || true => 조건들 중 하나라도 false면 결과 false

// often used to compress long if-statement
// nullableObject && nullableObject.something 
nullableObject = { name: "jennie", age: 20, currentlyStudent: true };
if (nullableObject != null) { // null object가 null이 아닐때만 이 오브젝트 안의 something (name, age 등등 지정해놓은 것) 그 value를 받아 올 수 있음
    nullableObject.something;
    console.log(nullableObject.something);
    console.log(nullableObject.name);
    console.log(nullableObject.age);
    console.log(nullableObject.currentlyStudent);
}

function check() {
    for (let i = 0; i < 10; i++) {
        //wasting time
        console.log('^.^');
    }
    return true;
}

// || (or) 연산자는 첫 조건이 true이면 거기에서 멈춤. 
const value3 = true;
const value4 = 4 < 2; // false

// || (or)
console.log(`or: ${value1 || value2 || check()}`); // ture || false || true -> 따라서 check()함수가 실행되기 전, 첫 값인 value1에서 true 출력함.
// 따라서 &&, ||등의 연산을 할때 heavy한 function 조건 코드를 뒤에 놓고, 
// 앞의 가벼운 조건들이 false이거나 true일 경우 뒤의 조건까지 오지 않도록 하는 것이 좋은 코드
// 따라서 value1, value2가 모두 false이거나 모두 true 일때 마지막으로 마지못해 function인 check()를 돌릴 수 있도록 하는 것이 좋음

// ! (not)
console.log(!value1); //value1 = false -> !value1 = true

// 7. Equality
const stringFive = '5';
const numberFive = 5;

// == loose equality, with type conversion (type은 신경 안씀, 그 값만 신경씀)
console.log(stringFive == numberFive); // true
console.log(stringFive != numberFive); // false

// === strict eqaulity, no type conversion <- recommand!
console.log(stringFive === numberFive); // false
console.log(stringFive !== numberFive); // true

// obejct equality by reference // object의 경우 그 안에 ref가 있고 그것이 각각의 value를 가리킴. 따라서 value가 같아도, ref가 다르기때문에 다른 값으로 인정
const ellie1 = { name: 'ellie' };
const ellie2 = { name: 'ellie' };
const ellie3 = ellie1; // but ellie3은 ellie1로 지정되었기 때문에 이때는 같은 ref와 value를 할당 받음, 따라서 같은 값으로 인정됨
console.log(ellie1 == ellie2); // false // 똑같은 타입이든 아니든 ref값이 다름 -> false 
console.log(ellie1 === ellie2); // false // 위의 경우와 마찬가지
console.log(ellie1 === ellie3); // true

// equality - puzzler
console.log(0 == false); // 0(false)로 간주 => true
console.log(0 === false); // 0(number type) != false(boolean type) => false
console.log('' == false); // ''(false)로 간주 => true
console.log('' === false); // ''(string type) != false(boolean type) => false 
console.log(null == undefined); // null(false) = undefined(false) => true
console.log(null === undefined); // null (null type으로 유일) != undefiend(undefined type으로 유일함) => false

// 8. Conditional operators: if
// if, else if, else
let name = "ellie";
if (name === "ellie") {
    console.log('Welcome, Ellie!');
} else if (name === 'coder') {
    console.log('You are amazing coder');
} else {
    console.log('unknown');
}

name = "coder";
if (name === "ellie") {
    console.log('Welcome, Ellie!');
} else if (name === 'coder') {
    console.log('You are amazing coder!');
} else {
    console.log('unknown');
}

name = "jennie";
if (name === "ellie") {
    console.log('Welcome, Ellie!');
} else if (name === 'coder') {
    console.log('You are amazing coder!');
} else {
    console.log('unknown');
}

// 9. Ternary operator : ?
// condition ? value1 : value2;
console.log(name === 'ellie' ? 'yes' : 'no'); // condition ? true면 value1 실행 : false면 value2 실행 => 결과 no (현재 name = jennie)

// 10. Switch statement
// use for multiple if checks
// use for enum-like value check
// use for multiple type checks in TS
const browser = "IE";
switch (browser) {
    case 'IE':
        console.log('go away!');
        break;

    //같은 값을 송출하고 싶으면 붙여서 사용해도 됨
    case 'Chrome':
    case 'Firefox':
        console.log('love you!');
        break;

    default:
        console.log('same all');
        break;
}

// 11. Loops
// while loop, while the condition is truthy, 
// body code is executed.
// 즉 while의 condition이 true라면 false가 될때까지 loop.
let i = 3;
while (i > 0) {
    console.log(`while: ${i}`); // while:3, while: 2, whiel: 1
    i--;
}

// do while loop, body code is executed first,
// then check the condition.
// 일단 코드 시작, 마지막에 조건 확인 후 그것이 false면 끝. 
do {
    console.log(`do while: ${i}`); // do while: 0
    i--;
} while (i > 0); // condition은 i > 0 현재 i의 값은 0이기 때문에 이미 조건은 false임, But, do while은 먼저 시작하기때문에
//do while: 0 이라는 값이 결과가 

// for loop, for(begin; condition; step)
for (i = 3; i > 0; i--) { //조건 i의 현재 값은 3, i가 0이 클 때까지 실행, i는 순차적으로 감소됨
    console.log(`for: ${i}`); // for: 3, for: 2, for: 1
}

for (let i = 3; i > 0; i = i - 2) { // 조건 i의 현재 값은 3, i가 0보다 클 때까지 실행, i는 i값의 2씩 감소됨. 
    // inline variable declaration
    console.log(`inline variable for: ${i}`); // inline variable for: 3, inlinevariable for: 1
}

// nested loops
for (let i = 0; i < 10; i++) { // 조건 i의 현재 값은 0, i가 10이 될 때 까지(10포함 안 됨), i는 1씩 증가
    for (let j = 0; j < 10; j++) { // 조건 j의 현재 값은 0, j가 10이 될 때 까지 (10포함 안 됨), j는 1씩 증가
        console.log(`i: ${i}, j: ${j}`); //i: 0, j: 0~9까지 순차적으로 출력 -> i: 1, j: 0~9 이런식으로 i의 값이 9가 될 때 까지 반복
    }
}

// break(완전히 끝냄), continue(지금것만 skip, 그 다음 스텝으로 진행)
// Q1. iterate from 0 to 10 and print only even numbers (use continue) 짝수만 출력
for (let i = 0; i < 11; i++) {
    if (i % 2 !== 0) {
        continue;
    }
    console.log(`q1: ${i}`);
}

for (let i = 0; i < 11; i++) {
    if (i % 2 === 0) {
    console.log(`q1 ver2: ${i}`);
    }
}

// Q2. iterate from 0 to 10 and print numbers until reaching 8 (use break)
for (let i = 0; i < 10; i++) {
    console.log(`q2: ${i}`);
    if (i == 8) { 
        break;
    }
}

for (let i = 0; i < 10; i++) {
    if (i > 8) {
        break;
    }
    console.log(`q2 ver2: ${i}`);
}