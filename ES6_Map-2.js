const readline = require("readline");

// Convert object to map using Object.entries()
const dennyObj = {
  name: "Denny",
  age: 23,
  gender: "M",
};

const dennyMap = new Map(Object.entries(dennyObj));
console.log(dennyMap.entries());
/*
[Map Entries] { [ 'name', 'Denny' ], [ 'age', 23 ], [ 'gender', 'M' ] }
*/

// Alternative way to initialize a Map
// Pass an array of arrays whose 0 position is key, 1 position is value
// [["key", "value"]]
const question = new Map([
  ["Question", "What is the best programming language?"],
  [1, "C"],
  [2, "Java"],
  [3, "JavaScript"],
  ["correct", 3],
  [true, "Correct! ✅"],
  [false, "Wrong, try again! ❌"],
]);

// Maps are iterables
for (const [key, value] of question) {
  if (typeof key === "number") {
    console.log(`Answer ${key}: ${value}`);
  }
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question(question.get("Question"), (answer) => {
  console.log(question.get(Number(answer) === question.get("correct")));
  // 1,2 => "Wrong, try again! ❌"
  // 3 => "Correct! ✅"

  rl.close();
});

// Convert map to array
console.log([...question]);
console.log([...question.keys()]); // [ 'Question', 1, 2, 3, 'correct', true, false ]
console.log([...question.values()]);
/*
[
  'What is the best programming language?',
  'C',
  'Java',
  'JavaScript',
  3,
  'Correct! ✅',
  'Wrong, try again! ❌'
]
*/
