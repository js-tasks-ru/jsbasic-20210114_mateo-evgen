/**
 * Складываем зарплаты
 * @param {Object} salaries - объект зарплат
 * @returns {Number}
 */
function sumSalary(salaries) {
  let result = 0;
  for(let key in salaries) {
    if (typeof salaries[key] === 'number' && isNaN(salaries[key]) === false && isFinite(salaries[key]) === true) {
      result += salaries[key];
    }
  }
  return result;
}

/* ver. 2
function sumSalary(salaries) {
  let result = 0;
  let clone = {};
  
  for (let key in salaries) {
  clone[key] = salaries[key];
}
  for (let key in clone) {
    if (typeof clone[key] != 'number'  || isNaN(clone[key]) === true || isFinite(clone[key]) === false) {
      delete clone[key];
    }
  }
  for (let key in clone) {
    result = result + clone[key];
  }
  return result;
}*/