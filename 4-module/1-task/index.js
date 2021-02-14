/**
 * Генерация HTML списка друзей
 * @param {Object[]} friends
 * @return {HTMLUListElement}
 */
function makeFriendsList(someList) {
  const list = document.createElement('ul');
  for(let i = 0; i < someList.length; i++) {
      const fullName = someList[i].firstname + " " + someList[i].lastname;
      const text = document.createTextNode(fullName);
      const item = document.createElement('li');
      item.appendChild(text);
      list.appendChild(item);
    }
    return list;
}
