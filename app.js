function fakeSome(array, callback) {
  for (let element of array) {
    //si la function callback devuelve true con alguno de los elementos del array como argumento, se devuelve true y se sale de la función
    if (callback(element)) {
      return true;
    }
  }
  //si se iteró sobre todo los elementos es porque la función nunca devolvió true, entonces se devuelve false
  return false;
}

function fakeEvery(array, callback) {
  //si la función callback devuelve false con alguno de los elementos del array el output será false
  for (let element of array) {
    if (!callback(element)) {
      return false;
    }
  }
  //si se cumple la condición en todos los elementos del array, devuelve true
  return true;
}

function fakeMap(array, callback) {
  const newArray = [];
  //a cada elemento del array se le aplica la función de callback y se lo guarda en un nuevo array
  for (let i = 0; i < array.length; i++) {
    newArray.push(callback(array[i], i, array));
  }
  //se devuelve el nuevo array
  return newArray;
}
