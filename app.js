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
  if (array.lenght != 0) {
    let accumulator = array[0];
    for (let i = 0; i < array.length - 1; i++) {
      accumulator = callback(accumulator, array[i + 1]);
    }
    return accumulator;
  }
  return undefined;
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

function fakeFind(array, callback) {
  for (let element of array) {
    if (callback(element)) {
      return element;
    }
  }
  return undefined;
}
////forEach

function fakeForEach(array, callback) {   
    for(i=0;i<array.length;i++){
      if (callback(array[i])) {
        return true;
      }
    }
}
//fakeIncludes
function fakeIncludes(array, element){
    exist = false
    for(i=0; i<array.length;i++){
        if (element == array[i]) {
            exist = true;
        }
    }
    return exist
  }
