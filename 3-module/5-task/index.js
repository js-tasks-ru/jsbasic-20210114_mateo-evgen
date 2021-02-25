/**
 * Найти min/max в произвольной строке
 * @param   {string} str -  входные данные
 * @returns {{min:number, max:number}}  объект
 */
function getMinMax(str) {
  let newArr = [];
  let obj = {};
  let min = 0;
  let max = 0;
  let arr = str.split(',').join(' ');
  let arr2 = arr.split(' ');
    for(let i = 0; i < arr2.length; i++) {
      if (isNaN(+arr2[i]) === false && arr2[i] != "") {
        newArr.push(+arr2[i]);
      }
    }      
  for(let i = 0; i < newArr.length; i++) {
    if(min > newArr[i]) {
      min = newArr[i];
    }
    if (max < newArr[i]) {
      max = newArr[i];
    }
  }
  obj.min = min;
  obj.max = max;
  
  return obj;
}
