/**
 * ucFirst
 * @param {string} str
 * @returns {string}
 */
function ucFirst(str) {
  if (str === "") {
    return "";
    }
   else if (str != "") {
   str = str[0].toUpperCase() + str.slice(1, str.length);
   return str;
    }
  }
