const cartForParty = {
  beers: 1.75,
  chips: 0.99,
  soda: 1.5,
  pizza: 4.25,
  candy: 2.0,
};

function calculateTotalPrice(cart) {
  let total = 0;

  for (let key in cart) {
    total += cart[key]; // cart["beers"], cart["chips"], ...
  }

  return `Total: €${total}`;
}

// ! Test functions (plain vanilla JavaScript)
function test1() {
  console.log('\nTest 1: calculateTotalPrice should take one parameter');
}

function test2() {
  console.log('\nTest 2: return correct output when passed cartForParty');
}

function test() {
  test1();
  test2();
}

test();
