'use strict';

//2. Variable, rw(read/write) (처음 ellie지정, 이후 hello로 변경 가능)
//let (added in ES6)
let globalName = 'global name';
{
    let name = 'ellie';
    console.log(name);
    name = 'hello';
    console.log(globalName);    
}
console.log(name);    
console.log(globalName);    
-
// var (don't ever us this!)
// var hoisting (move declaration from bottom to top) 어디에서 선언했는지와 상관없이 항상 위로 끌어올려주는 것
// has no block scope (block scope가 없음, 이것을 철저히 무시)
    console.log(age);
    age = 4;

    console.log(age);
    var age;

// 이런식으로 var을 block scope안에서 선언했으면 실제로 밖에서는 사용할 수 없어야하는데, var의 경우 사용가능, 이것이 큰 문제점
    console.log(lastname);
    {
     lastname = 'lee';
     var lastname;
    }

// 3. Constant (r : read) //읽기만 가능, 값 변경 불가
// favor immutable datat type always for a few reasons:
// - security
// - thread safety
// - reduce human mistakes
const daysInWeek = 7;
const maxNumber = 5;

// Note!
// Immutable data types: premitive types, frozen objects (i.e. object.freeze()) // data자체를 변경하는 것 불가능
// Mutable data types: all objects by default are mutable in JS // object안에있는 이름이나 나이 ref가 가리키는것은 수정 가능했던 것 처럼, mutable datatype임
// favor immutable data type always for a few reasons:
// - security
// - thread safety
// - reduce human mistakes 

// 4. Variable types (primitive인지 object type인지에 따가 메모리에 다른 형태로 저장됨)
// primitive, single item : number, string, boolean, null, undefined, symbol ->값이 바로 그대로 저장
// object, box container -> 값이 너무 크기때문에 그대로 저장 불가 ref(레퍼런스는 실제로 object들을 가리키고 있는 곳-> 이것이 실제로 메모리가 담겨있는 object를 가리킴 )
// function, first-class function 

// number - special numeric values : infinity, -infinity, NaN
const infinity = 1 / 0; // integer
const negativeInfinity = -1 / 0; // decimal number
const nAn = 'not a number' / 2;
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

// bigInt (fairly new, don't use it yet)
const bigInt = 123456789012345678901234567890n; // 마지막에 n를 붙이면 bigInt로 생각, chrome, firefox에서만 지원 // over (-2**53) ~ 2*53)
console.log(`value: ${bigInt}, type: ${typeof bigInt}`);

// string
const char = 'c'; // there is no char type just string.
const brendan = 'brendan';
const greeting = 'hello' + brendan;
console.log(`value: ${greeting}, type: ${typeof greeting}`);
const helloBob = `hi ${brendan}!`; //template literals (string) 벡틱 기호를 이용해서 변수의 값을 붙여서 사용
console.log(`value: ${helloBob}, type: ${typeof helloBob}`);

// boolean
// false: 0, null, undefined, NaN, ''
// true: any other value
const canRead = true;
const test = 3 < 1; // false
console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`value: ${test}, type: ${typeof test}`);

//null = null로 값이 지정되어 있는 것
let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`);

//undefined = 값이 지정되어 있지않음.
let x;
console.log(`value: ${x}, type: ${typeof x}`);

//symbol, create unique indentifiers for objects (스트링과 달리 심볼은 스트링내용이 같아도 같은 값이 아님)
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2); // false
// 이를 방지하기위해 같게 만들고 싶다면, use for
const gSymbol1 = Symbol.for('id');
const gSymbol2 = Symbol.for('id');
console.log(gSymbol1 === gSymbol2); // true
//symbol을 출력할때는 .description을 이용해서 string으로 변환 후 출력해야한다.
console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`) //value: id, type: symbol

// object, real-life object, data structer
const ellie = { name: 'ellie', age: '20'}
//엘리가 가리키고 있는 ref포인터는 잠겨있음 이것을 그대로 수정하는 것은 불가, but ref가 담고 있는 name, age는 수정 가능
ellie.age = 21;
console.log(ellie.age); // 21

// 5. Dynamic typing: dynamically typed language (프로그램이 작동할때 할당된 값이 변경될 수 있다는 것을 의미함)
let text = 'hello';
console.log(text.charAt(0)); //배열에서 index는 0부터 시작 // 결과 h

console.log(`value: ${text}, type: ${typeof text}`);//value: hello, type: string
text = 1;
console.log(`value: ${text}, type: ${typeof text}`);//value: 1, type: number
text = '7' + 5;
console.log(`value: ${text}, type: ${typeof text}`);//value: 75, type: string
text = '8' / '2'
console.log(`value: ${text}, type: ${typeof text}`);//value: 4, type: number 

console.log(text.charAt(0)); //앞의 text는 string타입이였기때문에 charAt을 사용할 수 있었으나, 중간에 number로 타입이 바뀌었기때문에 이때는 error 발생
//JS는 runtime에서 error가 발생하기 때문에 이것 때문에 error가 많이 발생함.


