// Q1. make a string out of an array
{
  const fruits = ["apple", "banana", "orange"];
  const result = fruits.join(); // apple,banana,orange
  const result1 = fruits.join(" and "); // apple and banana and orange
  const result2 = fruits.join("|"); // apple|banana|orange
  console.log(result);
  console.log(result1);
  console.log(result2);
}

// Q2. make an array out of a string
{
  const fruits = "🍎, 🥝, 🍌, 🍒";
  const result = fruits.split(","); // (4) ['🍎', ' 🥝', ' 🍌', ' 🍒']
  const result1 = fruits.split(",", 2); // (2) ['🍎', ' 🥝']
  console.log(result);
  console.log(result1);
}

// Q3. make this array look like this: [5, 4, 3, 2, 1]
{
  const array = [1, 2, 3, 4, 5];
  const result = array.reverse();
  console.log(result); // (5) [5, 4, 3, 2, 1]
  console.log(array); // (5) [5, 4, 3, 2, 1] 배열 자체도 반대로 변환 시킴
}

// Q4. make new array without the first two elements
{
  const array = [1, 2, 3, 4, 5];
  const array1 = [1, 2, 3, 4, 5];
  const array2 = [1, 2, 3, 4, 5];
  const result = array.splice(2); // 1,2 deleted, left over return
  console.log(result); // (3) [3, 4, 5]
  console.log(array); // (2) [1, 2]

  const result1 = array1.splice(0, 2); // 0~2 deleted, deleted element return
  console.log(result1); // (2) [1, 2]
  console.log(array1); // (3) [3, 4, 5]

  const result2 = array2.slice(2, 5); // 기존 어레이 변경되지 않음
  console.log(result2); // (3) [3, 4, 5]
  console.log(array2); // (5) [1, 2, 3, 4, 5]
}

class Student {
  constructor(name, age, enrolled, score) {
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.score = score;
  }
}
const students = [
  new Student("A", 29, true, 45),
  new Student("B", 28, false, 80),
  new Student("C", 30, true, 90),
  new Student("D", 40, false, 66),
  new Student("E", 18, true, 88),
];

// Q5. find a student with the score 90
{
  const result = students.find((student) => (student.score === 90));
  console.log(result);
}

// Q6. make an array of enrolled students
{
  const result = students.filter((student) => (student.enrolled === true));
  console.log(result);
}

// Q7. make an array containing only the students' scores
// result should be: [45, 80, 90, 66, 88]
{
  const result = students.map(student => student.score);
  console.log(result);
}

// Q8. check if there is a student with the score lower than 50
{
  const result = students.some(student => student.score < 50); // 몇개가 50보다 작다면
  console.log(result); // true

  const result1 = !students.every(student => student.score >= 50); // 모두가 50과 같거나 크지 않다면
  console.log(result1); // true
}

// Q9. compute students' average score
{
  const result = students.reduce((prev, curr) => {
    return prev + curr.score / students.length;
  }, 0);
  console.log(result);
}

// Q10. make a string containing all the scores
// result should be: '45, 80, 90, 66, 88'
{
  const result = students.map(student => student.score).join();
  console.log(result);

  const result1 = students.map(student => student.score);
  console.log(result1.toString());

}

// Bonus! do Q10 sorted in ascending order
// result should be: '45, 66, 80, 88, 90'
{
  const result = students.map(student => student.score).sort();
  console.log(result);
}
