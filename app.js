function _forEach(array, callback) {
  for (let element of array) {
    callback(element);
  }
}

function _some(array, callback) {
  for (let element of array) {
    if (callback(element)) {
      return true;
    }
  }
  return false;
}

function _every(array, callback) {
  for (let element of array) {
    if (!callback(element)) {
      return false;
    }
  }
  return true;
}

function _find(array, callback) {
  for (let element of array) {
    if (callback(element)) {
      return element;
    }
  }
  return undefined;
}

function _includes(array, include) {
  for (let element of array) {
    if (element == include) {
      return true;
    }
  }
  return false;
}

function _map(array, callback) {
  const mappedArray = [];
  const pushToMappedArray = element => mappedArray.push(callback(element));
  _forEach(array, pushToMappedArray);
  return mappedArray;
}

function _filter(array, callback) {
  const newArray = [];
  _forEach(array, element => {
    if (callback(element)) {
      newArray.push(element);
    }
  });
  return newArray;
}

function _reduce(array, callback, initialValue) {
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

function _union(arrayOne, arrayTwo) {
  const unionArray = [...arrayOne];
  const filteredArray = _filter(
    arrayTwo,
    element => !_includes(arrayOne, element)
  );
  _forEach(filteredArray, element => unionArray.push(element));
  return unionArray;
}

function _intersection(arrayOne, arrayTwo) {
  return _reduce(
    arrayOne,
    (intersection, element) => {
      if (_includes(arrayTwo, element) && !_includes(intersection, element)) {
        intersection.push(element);
      }
      return intersection;
    },
    []
  );
}

function _includes(array, element) {
  if (_indexOf(array, element) > -1) {
    return true;
  }
  return false;
}

function _sum(array) {
  const sum = (x, y) => x + y;
  return _reduce(array, sum);
}

function _indexOfRecursive(array, element, index = 0) {
  if (index === array.length) {
    return -1;
  } else {
    if (array[index] === element) {
      return index;
    } else {
      return _indexOfRecursive(array, element, index + 1);
    }
  }
}

function _indexOf(array, element) {
  for (let index = 0; index < array.length; index++) {
    if (array[index] == element) {
      return index;
    }
  }
  return -1;
}

function _max(array) {
  return _reduce(array, (max, cur) => (max > cur ? max : cur));
}

function _min(array) {
  return _reduce(array, (min, cur) => (min < cur ? min : cur));
}

function _isEqual(arrayOne, arrayTwo) {
  return arrayOne.length === arrayTwo.length
    ? _reduce(
        arrayOne,
        (equal, cur, index) => {
          return cur !== arrayTwo[index] ? !equal : equal;
        },
        true
      )
    : false;
}

function _lastIndexOf(array, element) {
  for (let i = array.length - 1; i >= 0; i--) {
    if (array[i] === element) {
      return i;
    }
  }
  return -1;
}

function _concat(...arrays) {
  return _reduce(
    arrays,
    (concatenatedArray, currentArray) => {
      for (element of currentArray) {
        concatenatedArray.push(element);
      }
      return concatenatedArray;
    },
    []
  );
}
