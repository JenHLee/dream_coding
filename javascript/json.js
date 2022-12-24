// JSON
// JavaScript Object Notation

// 1. Object to JSON
// stringfy(obj)
let json = JSON.stringify(true);
console.log(json);

json = JSON.stringify(['apple', 'banana']);
console.log(json);

const rabbit ={ 
    name: 'tori',
    color : 'white',
    size : null,
    birthDate: new Date(),
    jump: () => {
        console.log(`${name} can jump!`);
    }, // function is not included in obj as a data
}

json = JSON.stringify(rabbit);
console.log(json);

json = JSON.stringify(rabbit, ['name']); // only name is sent
console.log(json); // {"name: "tori"}

json = JSON.stringify(rabbit, (key, value) => {
   console.log(`key: ${key}, value: ${value}`); 
   return key === 'name' ? 'jennie' : value;
});
console.log(json);

// 2. JSON to Object
//  parse(json)
console.clear();
json = JSON.stringify(rabbit);
const obj = JSON.parse(json, (key, value) => {
    console.log(`key: ${key}, value: ${value}`);
    return key === 'birthDate' ? new Date(value) : value;
});
console.log(json);
rabbit.jump(); // there is jump function
// obj.jump(); // can't get it cuz there is no jump function

console.log(rabbit.birthDate.getDate()); // 19
// console.log(obj.birthDate.getDate()); // can't get birthDate 
console.log(obj.birthDate); // 2022-12-20T00:09:05.618Z // string
console.log(obj.birthDate.getDate()); // 19 // line 40 there is condition for this.
