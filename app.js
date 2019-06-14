function fakeForEach(array, callback) {
  for (let element of array) {
    callback(element);
  }
}

function fakeSome(array, callback) {
  for (let element of array) {
    if (callback(element)) {
      return true;
    }
  }
  return false;
}

function fakeEvery(array, callback) {
  for (let element of array) {
    if (!callback(element)) {
      return false;
    }
  }
  return true;
}

function fakeFind(array, callback) {
  for (let element of array) {
    if (callback(element)) {
      return element;
    }
  }
  return undefined;
}

function fakeIncludes(array, include) {
  for (let element of array) {
      if(element == include){
         return true;
      }
  }
  return false;
}

function fakeMap(array, callback) {
  const newArray = [];
  for (element of array) {
    newArray.push(callback(element));
  }
  return newArray;
}

function fakeFilter(array, callback) {
  const newArray = [];
  for (element of array) {
    if (callback(element)) {
      newArray.push(element);
    }
  }
  return newArray;
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