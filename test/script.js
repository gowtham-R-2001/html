let fruitsList = document.querySelector("#fruits-list");
let content = document.querySelector("#content");
console.log('hai');

let words = ["apple", "banana", "cat", "dog", "elephant", "fox", "ginger"];
words.forEach((word) => {
  let option = document.createElement('option');
  option.setAttribute('value',word);
  fruitsList.appendChild(option);
});









// async function doWork(url) {
//   let x = await fetch(url)
//     .then((res) => {
//       return res.json();
//     })
//     .then((data) => {
//       console.log(data);
//       return data;
//     })
//     .catch((err) => console.log(err));

//   return x;
// }

// (async () => {
//   let data = await doWork(`https://jsonplaceholder.typicode.com/todos/1`);
//   content.textContent = data.false;
// })();

// function ConstructorFunction() {
//     let count = 0;
//     this.incrementCounter = () => {
//         count++;
//         console.log(count);
//     }

//     this.decrementCounter = () => {
//         count--;
//         console.log(count);
//     }
// }

// let count1 = new ConstructorFunction();
// count1.incrementCounter();
// count1.incrementCounter();
// count1.incrementCounter();
// count1.decrementCounter();

// let count2 = new ConstructorFunction();
// count2.decrementCounter();
// count2.decrementCounter();
// count2.decrementCounter();

// https://jsonplaceholder.typicode.com/todos/1
