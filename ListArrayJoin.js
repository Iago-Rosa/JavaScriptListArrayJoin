let fruits = [ 3, 4, 7, 9 ];
console.log(fruits.find(element => element > 5)); // Output: 7
// Second Sampel
fruits = [ 
  { name: 'Apple', price: 3.55 },
  { name: 'Orange', price: 2.43 },
  { name: 'Papaya', price: 4.76 }
];
const result = fruits.find(fruit => fruit.name === 'Apple');
console.log(result); 




