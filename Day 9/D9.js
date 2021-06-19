const value1 = { a: 200, b: 300 };
const value2 = { p: 2000, q: 4000 };

function add(a, b) {
  console.log(this);
  console.log(a + b);
}

add.apply(value1, [4, 6]);
add.call(value2, 4, 6);
const y = add.bind(value1, 12, 20);
console.log(y);
y();
