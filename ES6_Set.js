// `Set` constructor takes in an iterable (such as array)
const foodSet = new Set(["Pasta", "Pizza", "Pizza", "Risotto", "Pasta", "Pizza"]);
console.log(foodSet); // Set { 'Pasta', 'Pizza', 'Risotto' }

// A set is also iterable
foodSet.forEach((item) => console.log(item)); // Pasta Pizza Risotto
for (item of foodSet) console.log(item); // Pasta Pizza Risotto

// Set methods:

// Set.prototype.size() => returns the size of the set
console.log(foodSet.size); // 3 *** size, not length

// Set.prototype.has() => returns boolean, whether the set contains the key
console.log(foodSet.has("Pizza")); // true
console.log(foodSet.has("Orange Chicken")); // false

// Set.prototype.add() => returns the set instance itself after adding the new value
foodSet.add("Orange Chicken");
foodSet.add("Orange Chicken");
console.log(foodSet.add("Orange Chicken")); // Set { 'Pasta', 'Pizza', 'Risotto', 'Orange Chicken' }

// Set.prototype.delete() => returns boolean, whether the deletion is successful
console.log(foodSet.delete("Orange Chicken")); // true
console.log(foodSet); // Set { 'Pasta', 'Pizza', 'Risotto' }

// Set.prototype.clear() => returns undefined
console.log(foodSet.clear());
console.log(foodSet); // Set {}

// Set constructor also accepts string
const lettersSet = new Set("Hello Denny");
console.log(lettersSet); // Set { 'H', 'e', 'l', 'o', ' ', 'D', 'n', 'y' }

// Use cases:
// Remove duplicate items from arrays
const staff = [
  "Waiter",
  "Chef",
  "Waiter",
  "Chef",
  "Waiter",
  "Manager",
  "Manager",
  "Cashier",
  "Waiter",
];

// Spread operators works on all iterables, includes set
const uniqueStaff = [...new Set(staff)];
console.log(uniqueStaff); // [ 'Waiter', 'Chef', 'Manager', 'Cashier' ]

const uniqueStaffCount = new Set(staff).size;
console.log(uniqueStaffCount); // 4
