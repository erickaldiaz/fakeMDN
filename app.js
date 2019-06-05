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
  //declara una variable en la que se va a ir guardando el resulado de la función callback
  let result;
  
  //se itera el array, sin condición para que se itere "siempre", ya que la condición va dentro del for
  for (let i = 0; ; i++) {
    //si el array tiene solo un elemento, se devuelve ese elemento 
    if (array.length == 1) {
      return array[0];
    //si el array tiene solo dos elementos, se devuelve el resultado de la función callback con esos dos elementos
    } else if (array.length == 2) {
          return callback(array[0], array[1]);
    //si el array tiene más de dos elementos, se ejecuta la función callback con los primeros dos elementos, y luego se los reemplaza por el resultado de la función			
    } else {
        result = callback(array[0], array[1]);
        array.splice(0, 2, result);
    }
  }
}
