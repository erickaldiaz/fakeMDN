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
	let unionArray = [];
	
  function isInUnionArray(element) {
		if (!fakeIncludes(unionArray, element)) {
			unionArray.push(element)
		}
	}
	
  fakeForEach(arrayOne, isInUnionArray);
	fakeForEach(arrayTwo, isInUnionArray);
	return unionArray;
}

function fakeIndexOfRecursive(array, element) {
	function isEqual(array, index, element) {
		if (array[index] === element) {
			return index;
		} else if (index === array.length) {
			return -1;
		} else {
			return isEqual(array, index + 1, element);
		}
	}
	return isEqual(array, 0, element);
}
