/**
 * @param   {{ name: string, age: number }[]} users
 * @returns {string[]}  объект
 */
function namify(users) {
  let onlyNames = users.map(item => item.name);
  return onlyNames;
}
