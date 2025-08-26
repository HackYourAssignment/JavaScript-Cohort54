/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Assignments/tree/main/1-JavaScript/Week3#exercise-6-total-cost-is

You want to buy a couple of things from the supermarket to prepare for a party.
After scanning all the items the cashier wants to give you the total price, but
the machine is broken! Let's write her a function that does it for her
instead!

1. Create an object named `cartForParty` with five properties. Each property
   should be a grocery item (like `beers` or `chips`) and hold a number value
   (like `1.75` or `0.99`).

2. Complete the function called `calculateTotalPrice`.

   - It takes one parameter: an object that contains properties that only contain
     number values.
   - Loop through the object and add all the number values together.
   - Return a string: "Total: €`amount`".

3. Complete the unit test functions and verify that all is working as expected.
-----------------------------------------------------------------------------*/
const cartForParty = {
  beer: 1.99,
  chips: 0.95,
  vodka: 18.45,
  nachos: 4.67,
  juice: 5.34,
};
console.log(cartForParty.beer); //xx
console.log(typeof cartForParty); //xx
console.log(typeof cartForParty === 'object'); //xx

function calculateTotalPrice(cartItems) {
  if (typeof cartItems === 'object') {
    let total = 0;
    for (let i in cartItems) {
      console.log(cartItems[i]);
      total += cartItems[i];
      console.log(total);
    }
    console.log(total);
    return `Total: € ${total}`;
  } else {
    return `${cartItems} is not an object. Please provide an object for this function to work.`;
  }
}

// ! Test functions (plain vanilla JavaScript)
function test1() {
  console.log('\nTest 1: calculateTotalPrice should take one parameter');
  console.assert(calculateTotalPrice.length === 1);
  console.log(calculateTotalPrice.length === 1);
}

function test2() {
  console.log('\nTest 2: return correct output when passed cartForParty');
  const initialCart = {
    beer: 1.99,
    chips: 0.95,
    vodka: 18.45,
    nachos: 4.67,
    juice: 5.34,
  };

  const expectedResultValue =
    initialCart.beer +
    initialCart.chips +
    initialCart.vodka +
    initialCart.nachos +
    initialCart.juice;
  const expectedResult = `Total: € ${expectedResultValue}`;
  const result = calculateTotalPrice(initialCart);
  console.assert(result === expectedResult, 'Your code is a distaster');
  console.log(result === expectedResult);
}

function test() {
  test1();
  test2();
}

test();
