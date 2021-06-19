const value1 = { a: 200, b: 300 };
const value2 = { p: 2000, q: 4000 };

function add(a, b) {
  console.log(this);
  console.log(a + b);
}

add.apply(value1, [2, 3]);
add.call(value2, 2, 3);
const y = add.bind(value1, 6, 8);
console.log(y);
y();
