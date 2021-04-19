
it('should calculate the monthly rate correctly', function () {
  // ...
  let values = {amount: 1000, years: 1, rate: 10};
  expect(calculateMonthlyPayment(values)).toEqual('87.92')
});


it("should return a result with 2 decimal places", function() {
  // ..
  let values = {amount: 1001, years: 1, rate: 10};
  expect(calculateMonthlyPayment(values)).toEqual('88.00')
});

/// etc
it("should handle high values", function() {
  // ..
  let values = {amount: 1000000, years: 35, rate: 99};
  expect(calculateMonthlyPayment(values)).toEqual('82500.00');
});

it("should handle low values", function() {
  // ..
  let values = {amount: 10, years: 1, rate: 1};
  expect(calculateMonthlyPayment(values)).toEqual('0.84');
});
