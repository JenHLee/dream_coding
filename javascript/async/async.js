// async & await
// clear style of using promise :)

// 1. async
async function fetchUser() {
  return "jennie";
}

// function fetchUser(){
//     return new Promise((resolve, reject) => {
//         // do network request in 10 secs....
//         resolve('jennie');
//     });
// }

const user = fetchUser();
user.then(console.log);
console.log(user);

// 2. await ✨
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function getApple() {
  await delay(2000);
  return "🍎";
}

async function getBanana() {
  await delay(1000);
  return "🍌";
}

async function pickFruits() {
  const apple = await getApple();
  const banana = await getBanana();
  return `${apple} + ${banana}`;
}
pickFruits().then(console.log);

// promise similar to callback hell example
// function pickFruits(){
//     return getApple().then(apple => {
//         return getBanana().then(banana => `${apple} + ${banana}`);
//     });
// }

// 3. useful Promise APIs ✨
function pickAllFruits() {
  return Promise.all([getApple(), getBanana()]).then((fruits) => // all: return when get all
    fruits.join(" + ")
  );
}
pickAllFruits().then(console.log);

function pickOnlyOne() {
    return Promise.race([getApple(), getBanana()]); // race: only return faster one
}

pickOnlyOne().then(console.log);