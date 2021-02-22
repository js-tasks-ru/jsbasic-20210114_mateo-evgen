/**
 * Factorial
 * @param {number} n
 * @returns {number}
 */
function factorial(n) {
  result = n;
  if (n <= 1) {
    result = 1;
  }
  else if (n > 1) {
   for (let i = 0; i < n; i++) {
   n = (n - 1);
   result *= n;
    }
  }
  return result;
}
