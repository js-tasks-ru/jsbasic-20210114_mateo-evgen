/**
 * showSalary
 * @param {Array} users - данные о пользователях
 * @param {number} age - максимальный возраст
 * @returns {string}
 */
function showSalary(someUsers, age) {
  let usersByAge = [];
  let newStr;
for(let user of someUsers) {
  if (user.age <= age) {
    usersByAge.push(user.name +', ' + user.balance ) ;
    }
  }
  newStr = usersByAge.join('\n');
  return newStr;
}

