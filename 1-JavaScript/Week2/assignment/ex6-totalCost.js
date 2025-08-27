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
    total += cart[key];
  }
  return `Total: €${total}`;
}
// ! Test functions (plain vanilla JavaScript)
function test1() {
  console.log('\nTest 1: calculateTotalPrice should take one parameter');
  const actual = calculateTotalPrice.length; // 1
  const expected = 1;
  console.assert(actual === expected);
}
function test2() {
  console.log('\nTest 2: return correct output when passe cartForParty');
  const testCart = {
    cola: 2,
    kitkat: 2.4,
    pepsi: 3,
  };
  const target = calculateTotalPrice(testCart);
  console.assert(target === `Total: €7.4`);
}
function test() {
  test1();
  test2();
}
test();
