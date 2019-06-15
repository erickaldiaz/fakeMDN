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
  let check = true;
	function checkElement(element) {
		if (!callback(element)) {
			check = false;
			return;
		}
	}	
	fakeForEach(array, checkElement);
	return check;
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
	const mappedArray = [];
	const pushToMappedArray = (element) => mappedArray.push(callback(element));
	fakeForEach(array, pushToMappedArray);
	return mappedArray;
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

function fakeIncludes(array, element) {
  if(fakeIndexOf(array, element)> -1){
    return true;
  }
  return false;  
}

function fakeSum(array) {
	const sum = (x, y) => x + y;
	return fakeReduce(array, sum);
}

function fakeIndexOfRecursive(array, element) {
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
	return isEqual(array, 0, element);
}

function fakeIndexOf(array, element){
  for(i=0; i < array.length; i++){
      if(array[i] == element){
        return i;
      }
     }
  return "-1"
}