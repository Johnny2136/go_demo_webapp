// fibonacci.test.js

// Import the function to test
const { calculateFibonacci } = require('./app');

// Mock the fetch function
global.fetch = jest.fn().mockResolvedValue({
    text: () => Promise.resolve("Fibonacci sequence up to 5: [0,1,1,2,3]")
});

// Test the calculateFibonacci function
test('calculateFibonacci fetches the correct Fibonacci sequence', async () => {
    await calculateFibonacci(5); // Call the function with n = 5

    // Check if fetch was called with the correct URL
    expect(fetch).toHaveBeenCalledWith('/fibonacci?n=5');
});
