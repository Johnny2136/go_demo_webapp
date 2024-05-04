// fibonacci.test.js
const { fibonacci } = require('./fibonacci');

test('calculateFibonacci fetches the correct Fibonacci sequence', async () => {
  // Mock fetch function
  global.fetch = jest.fn().mockResolvedValue({
    text: () => Promise.resolve("Fibonacci sequence up to 5: [0,1,1,2,3]")
  });

  // Import the function to test
  const { calculateFibonacci } = require('./app');

  // Call the function
  await calculateFibonacci(5);

  // Check if fetch was called with the correct URL
  expect(fetch).toHaveBeenCalledWith('/fibonacci?n=5');
});
