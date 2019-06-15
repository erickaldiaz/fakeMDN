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

function fakeFind(array, callback) {
  for (let element of array) {
    if (callback(element)) {
      return element;
    }
  }
  return undefined;
}

function fakeUnion(arrayOne, arrayTwo) {
  const unionArray = [...arrayOne];
  const filteredArray = fakeFilter(
    arrayTwo,
    element => !fakeIncludes(arrayOne, element)
  );
  fakeForEach(filteredArray, element => unionArray.push(element));
  return unionArray;
}

function fakeIntersection(arrayOne, arrayTwo) {
  const filteredArrayOne = new Set(arrayOne);
  return fakeFilter(
    [...filteredArrayOne],
    element => arrayTwo.indexOf(element) >= 0
  );
}
