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

function fakeMap(array, callback) {
  const mappedArray = [];
  const pushToMappedArray = element => mappedArray.push(callback(element));
  fakeForEach(array, pushToMappedArray);
  return mappedArray;
}

function fakeFilter(array, callback) {
  const newArray = [];
  for (let element of array) {
    if (callback(element)) {
      newArray.push(element);
    }
  }
  return newArray;
}

function fakeReduce(array, callback, initialValue) {
	if (array.length !== 0) {
		let index;
		let accumulator;
		if (initialValue === undefined) {
			index = 1;
			accumulator = array[0];
		} else {
			index = 0;
			accumulator = initialValue;
		}
		for (index; index < array.length; index++) {
			accumulator = callback(accumulator, array[index], index);
		}
		return accumulator;
	}
	return undefined;
}

function fakeUnion(arrayOne, arrayTwo) {
  const unionArray = [...arrayOne];
  const filteredArray = fakeFilter(arrayTwo, element => !fakeIncludes(arrayOne, element));
  fakeForEach(filteredArray, element => unionArray.push(element));
  return unionArray;
}

function fakeIntersection(arrayOne, arrayTwo) {
  return fakeReduce(arrayOne, (intersection, element) => {
    if (fakeIncludes(arrayTwo, element) && !(fakeIncludes(intersection, element))) {
      intersection.push(element);
    }
    
    return intersection;
  }, []);
};

function fakeIncludes(array, element) {
  if (fakeIndexOf(array, element) > -1) {
    return true;
  }
  return false;
}

function fakeSum(array) {
  const sum = (x, y) => x + y;
  return fakeReduce(array, sum);
}

function isEqual(array, index, element) {
  if (index === array.length) {
    return -1;
  } else {
    if (array[index] === element) {
      return index;
    } else {
      return isEqual(array, index + 1, element);
    }
  }
}

function fakeIndexOfRecursive(array, element) {
  return isEqual(array, 0, element);
}

function fakeIndexOf(array, element) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === element) {
      return i;
    }
  }
  return -1;
}

function fakeFindIndex(array, callback) {
  for (let index = 0; index < array.length; index++) {
    if (callback(array[index])) {
      return index;
    }
  }
  return -1;
}

function fakeArrayMax(array) {
	return fakeReduce(array, (max, cur) => max > cur ? max : cur);
}

function fakeIndexOf(array, element){
  for(i=0; i < array.length; i++){
      if(array[i] == element){
        return i;
      }
     }
  return -1
}

function fakeArrayMin(array) {
	return fakeReduce(array, (min, cur) => min < cur ? min : cur);
} 

function areEqual(arrayOne, arrayTwo) {
	return arrayOne.length === arrayTwo.length ?
		fakeReduce(arrayOne, (equal, cur, index) => {
			return cur !== arrayTwo[index] ? !equal : equal;
		}, true) :
		false;
}

function fakeLastIndexOf(array, element){
  for( let i = array.length -1; i >= 0; i--){
    if (array[i] === element){
      return i; 
    }
  }
  return -1;
}
