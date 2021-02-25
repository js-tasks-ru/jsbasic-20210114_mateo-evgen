/**
 * @param {string} str
 * @returns {string}
 */
function camelize(str) {
  let splittedStr = str.split("-");
  for(let i = 1; i < splittedStr.length; i++) {
    splittedStr[i] = splittedStr[i][0].toUpperCase() + splittedStr[i].slice(1);
  }
  return splittedStr.join('');
}
