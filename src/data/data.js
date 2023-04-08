export function uniqueRandomArrayWithMultipleNumbers(number, min, max, count) {
    let arr = [number]; // Clonamos el array de números para no modificar el original
    while (arr.length < count) {
      let random = Math.floor(Math.random() * (max - min + 1)) + min;
      if (arr.indexOf(random) === -1) {
        arr.push(random);
      }
    }
    return shuffle(arr);
  }
  
function shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
    return arr;
}