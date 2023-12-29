const map1 = new Map();

map1.set('a', 1);
map1.set('b', 2);
map1.set('c', 3);

console.log(map1.get('a'));
// Expected output: 1

map1.set('a', 97);

console.log(map1.get('a'));
// Expected output: 97

console.log(map1.size);
// Expected output: 3

map1.delete('b');

console.log(map1.size);
// Expected output: 2

const contacts = new Map();
contacts.set("Jessie", { phone: "213-555-1234", address: "123 N 1st Ave" });
contacts.has("Jessie"); // true
contacts.get("Hilary"); // undefined
contacts.set("Hilary", { phone: "617-555-4321", address: "321 S 2nd St" });
contacts.get("Jessie"); // {phone: "213-555-1234", address: "123 N 1st Ave"}
contacts.delete("Raymond"); // false
contacts.delete("Jessie"); // true, The delete() method of Map instances removes the specified element from this map by key.
console.log(contacts.size); // 1
contacts.clear();
console.log(contacts.size); // 0

// -- The entries() method of Map instances returns a new map iterator object that contains the [key, value] pairs for each element in this map in insertion order.

const myMap = new Map();
myMap.set("0", "foo");
myMap.set(1, "bar");
myMap.set({}, "baz");

const mapIter = myMap.entries();

console.log(mapIter.next().value); // ["0", "foo"]
console.log(mapIter.next().value); // [1, "bar"]
console.log(mapIter.next().value); // [Object, "baz"]

// --The values() method of Map instances returns a new map iterator object that contains the values for each element in this map in insertion order.
const map2 = new Map();

map2.set('0', 'foo');
map2.set(1, 'bar');

const iterator1 = map2.values();

console.log(iterator1.next().value);
// Expected output: "foo"

console.log(iterator1.next().value);
// Expected output: "bar"

const inventory = [
    { name: 'asparagus', type: 'vegetables', quantity: 9 },
    { name: 'bananas', type: 'fruit', quantity: 5 },
    { name: 'goat', type: 'meat', quantity: 23 },
    { name: 'cherries', type: 'fruit', quantity: 12 },
    { name: 'fish', type: 'meat', quantity: 22 },
  ];
  
  const restock = { restock: true };
  const sufficient = { restock: false };
  const result = Map.groupBy(inventory, ({ quantity }) =>
    quantity < 6 ? restock : sufficient,
  );
  console.log(result.get(restock));
  // [{ name: "bananas", type: "fruit", quantity: 5 }]