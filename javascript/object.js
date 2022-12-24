// Objects
// one of the JavaScript's data types.
// a collection of related data and/or functionality.
// Nearly all objects in JavaScript are instances of Object
// object = { key : value }; key 우리가 접근할 수 있는 변수(property) : value 그 property가 갖고 있는 값

// 1. Literals and properties
const obj1 = {}; // 'object literal' syntax
const obj2 = new Object(); // 'object constructor' syntax

function print(person){
    console.log(person.name);
    console.log(person.age);
}

const ellie = {name: 'ellie', age: 4}; 
print (ellie);

// JavaScript는 Runtime때 결정되는 language
// 그래서 이미 만들어진 object를 뒤늦게 추가, 수정할 수 있음. 하지만 이것은 유지보수에 좋지 않기때문에 지양해야함.
ellie.hasJob = true; // 뒤늦게 ellie라는 object에 hasJob을 추가함
console.log(ellie.hasJob); // true

delete ellie.hasJob; // delete도 가능
console.log(ellie.hasJob); // undefined

// 2. Computed properties
// key should be always string
console.log(ellie.name); // 일반적인 방법
console.log(ellie['name']); // 하지만 key의 존재 유무를 모를때 사용
ellie['hasJob'] = true;
console.log(ellie.hasJob);

function printValue(obj, key){
    console.log(obj.key); // obj.key라는 property가 있나? // 모름 : undefined
    console.log(obj[key]); // obj.key라는 property가 있나? // 있음 : ellie
}

printValue(ellie, 'name');

// 3. Property value shorthand
const person1 = { name: 'bob', age: 2 };
const person2 = { name: 'steve', age: 3 };
const person3 = { name: 'dave', age: 4 };
const person4 = makePerson('ellie', 30);
console.log(person4); // {name: 'ellie', age: 30}

function makePerson(name, age){
    return {
        name, // key 와 value가 동일하다면 생략 가능, 즉 원래는 name : name
        age, // age : age
    };
}

// 4. Constructor Function
function Person (name, age){
    // this = {};
    this.name = name;
    this.age = age;
    // return this;
}

// 5. in operator: property existence check (key in obj)
console.log('name' in ellie); // true
console.log('age' in ellie); // true
console.log('random' in ellie); // false
console.log(ellie.random); // undefined 왜냐하면 ellie에 존재하지 않는 key

// 6. for..in vs for..of
// for (key in obj)
console.clear() // console 지우기
for (key in ellie){
    // 엘리가 가지고 있는 key들이 이 블럭을 돌때마다 key라는 지역변수에 할당됨
    console.log(key); // name age hasJob
}

// for (value of iterable) 배열과 같은 순차적으로 iterable한 것들을 사용
const array = [1,2,4,5];
for(let i = 0; i< array.length; i++){
    console.log(array[i]);
}

for (value of array){ // array안에 있는 값들을 value에 할당함
    console.log(value);
}

// 7. Fun cloning
// Object.assign(dest, [obj1, obj2, obj3...])
const user = { name : 'ellie', age: '20'};
const user2 = user;
user2.name = 'coder';
console.log(user); // {'name : coder, age: '20'}

// old way
const user3 = {};
for (key in user){
    user3[key] = user[key];
}

console.clear();
console.log(user3); // {'name : coder, age: '20'}

const user4 = {};
Object.assign(user4, user);
console.log(user4); // {'name : coder, age: '20'}

// another example
const fruit1 = { color: 'red'};
const fruit2 = { color: 'blue', size: 'big'};
const mixed = Object.assign({}, fruit1, fruit2); // 동일한 property가 있다면 뒤의 값이 계속 앞의 값을 덮어씌움
console.log(mixed.color); // blue
console.log(mixed.size); // big
