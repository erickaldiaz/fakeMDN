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

function fakeReduce(array, callback) {
  //variable para ir guardando el resulado de la función callback
  let result;
  
  //la condición para que deje de iterar va implícita dentro del for
  for (let i = 0; ; i++) {
    if (array.length == 1) {
      return array[0];
    } else if (array.length == 2) {
          return callback(array[0], array[1]);
    } else {
        result = callback(array[0], array[1]);
        array.splice(0, 2, result);
    }
  }

function fakeFilter(array, callback) {
  const newArray = [];
  //se evalua si para cada elemento la condición definida en la función callback se cumple
  for (element of array) {
    if (callback(element)) {
      //si se cumple se agrega a un nuevo array
      newArray.push(element);
    }
  }
  //se devuelve el nuevo array
  return newArray;
}
