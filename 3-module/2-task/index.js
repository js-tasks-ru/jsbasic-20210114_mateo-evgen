/**
 * @param {number[]} arr
 * @param {number} a
 * @param {number} b
 * @returns {number[]}
 */
function filterRange(arr, a, b) {
  let filteredArray = [];
  for(let i = 0; i < arr.length; i++) {
    if(arr[i] >= a && arr[i] <= b) {
      filteredArray.push(arr[i]);
    }
  }
  return filteredArray;
}
