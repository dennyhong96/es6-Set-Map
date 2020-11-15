// Map's different from Object
// The key of a map can be any data type: Array, Object, other Map
// The key of Object is always just strings

const restaurant = new Map();

// Map.prototype.set() => returns the map instance itself after setting the value
restaurant.set("name", "Panda Express");
restaurant.set(1, "Seattle, WA");
console.log(restaurant.set(2, "Dalian, China"));

/*
Map {
  'name' => 'Panda Express',
  1 => 'Seattle, WA',
  2 => 'Dalian, China'
}
*/

// We can chain multiple .set() calls
console.log(
  restaurant
    .set("categories", ["Appetizer", "Main Course", "Drink"])
    .set("open", 9)
    .set("close", 23)
    .set(true, "We are open")
    .set(false, "We are closed")
);

// Map.prototype.get() => return value of given key, or undefined
console.log(restaurant.get(1)); // "Seattle, WA"
console.log(restaurant.get(true)); // "We are open"
console.log(restaurant.get(false)); // "We are closed"
console.log(restaurant.get("dslkfjsdklsdkj")); // undefined

// Usage: boolean value as map keys
let time = 21;
console.log(restaurant.get(time >= restaurant.get("open") && time <= restaurant.get("close"))); // "We are open"
time = 8;
console.log(restaurant.get(time >= restaurant.get("open") && time <= restaurant.get("close"))); // "We are closed"

// Map.prototype.has() => return boolean, whether the map has given key
console.log(restaurant.has("categories")); // true
console.log(restaurant.has("Alcohol")); // false

// Map.prototype.delete() => return boolean, whether deletion is successful
console.log(restaurant.delete("categories")); // true => deleted
console.log(restaurant.has("Alcohol")); // false => not found, not deleted

// Map.prototype.entries() => returns the entries of the map
console.log(restaurant.entries());
/*
[Map Entries] {
  [ 'name', 'Panda Express' ],
  [ 1, 'Seattle, WA' ],
  [ 2, 'Dalian, China' ],
  [ 'open', 9 ],
  [ 'close', 23 ],
  [ true, 'We are open' ],
  [ false, 'We are closed' ]
}
*/

// Map.prototype.size() => returns the size of the map
console.log(restaurant.size); // 7

// Map.prototype.clear() => clears the map, returns undefined
restaurant.clear();
console.log(restaurant.entries()); // [Map Entries] {  }

// Usage: Obejct, Array as map keys
// Key used to set and get must be same location in memory ***
const arrKey = [1, 2];
restaurant.set(arrKey, "This is value of an array key");
console.log(restaurant.get(arrKey)); // This is value of an array key

const objKey = { name: "Denny" };
restaurant.set(objKey, "This is value of an object key");
console.log(restaurant.get(objKey)); // This is value of an object key
