"use strict";
// Object-oriendted Programing
// class: template
// object: instance of a class
// JavaScript classes
// - introduced in ES6
// - syntactical sugar over prototype-based inheritance

// 1. Class declarations
class Person {
  // contructor
  constructor(name, age) {
    // fields
    this.name = name;
    this.age = age;
  }

  // methods
  speack() {
    console.log(`${this.name}: hello!`);
  }
}

const jennie = new Person("jennie", 20);
console.log(jennie.name);
console.log(jennie.age);
jennie.speack();

// 2. Getter and setters
class User {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  get age() {
    // get age()를 하는 순간, this.age는 getter인 get age()를 호출하게 됨
    return this._age; //return this.age; 대신 _ 사용 이유
    //Uncaught RangeError: Maximum call stack size exceeded 라는 에러를 막기위해 _를 사용하여 다른 이름으로 지정
  }

  set age(value) {
    // if (value < 0) {
    //   throw Error("age can not be negative");
    // }
    this._age = value < 0 ? 0 : value;
  }
}

const user1 = new User("Steve", "Job", -1); // 사람의 나이가 -1인 것이 말이 되지 않음 (여기서 현재 age의 값 value를 -1로 보냄)
console.log(user1.age);

// 3. Fields (public, private)
// Too soon!
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference
class Experiment {
  publicField = 2; //public으로 접근 가능
  #privateField = 0; //class 내부에서만 값이 보여지고 변경 가능
}
const experiment = new Experiment();
console.log(experiment.publicField); // 2
console.log(experiment.privateField); // undefined

// 4. Static properties and methods
// Too soon!
class Article {
  static publichser = "Dream Coding";
  constructor(articleNumber) {
    this.articleNumber = articleNumber;
  }

  static printPublisher() {
    console.log(Article.publichser);
  }
}

const article1 = new Article(1);
const article2 = new Article(2);
console.log(Article.publichser);
Article.printPublisher();

// 5. Inheritance 상속
// a way for one class to extend another class.
class Shape {
  constructor(width, height, color) {
    this.width = width;
    this.height = height;
    this.color = color;
  }
  draw() {
    console.log(`drawing ${this.color} color!`);
  }

  getArea() {
    return this.width * this.height;
  }
}

// 같은 클래스를 extends (확장, 상속)하게 된다면 공통되는 값을 굳이 따로 적지 않아도 상위 클래스의 값들을 재사용할 수 있음
// 부모 클래스인 Shape에서 수정하면 그 값이 자식 클래스인 rectangle, triangle에도 수정된 값이 나옴
class Rectangle extends Shape {}

// But! 삼각형의 경우, 면적을 구하는 공식이 다르기때문에 이 부분은 overriding 기능을 이용할 수 있음. (재정의)
class Triangle extends Shape {
  getArea() {
    return (this.width * this.height) / 2;
  }
  toString() {
    return `Triangle: color ${this.color}, width ${this.getArea()}`;
  }
}

const rectangle = new Rectangle(20, 20, "blue");
rectangle.draw(); // drawing blue color!
console.log(rectangle.getArea()); // 400

const triangle = new Triangle(20, 20, "red");
triangle.draw(); // drawing red color!
console.log(triangle.getArea()); // 200

// 6. Class checking: instanceOf
console.log(rectangle instanceof Rectangle); // true
console.log(triangle instanceof Rectangle); // false
console.log(triangle instanceof Triangle); // true
console.log(triangle instanceof Shape); // true
console.log(triangle instanceof Object); // true
console.log(triangle.toString()); // Triangle: color red, width 200
