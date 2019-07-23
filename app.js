Array.prototype._forEach = function(callback) {
  for (let element of this) {
    callback(element);
  }
};

Array.prototype._some = function(callback) {
  for (let element of this) {
    if (callback(element)) {
      return true;
    }
  }
  return false;
};

Array.prototype._every = function(callback) {
  for (let element of this) {
    if (!callback(element)) {
      return false;
    }
  }
  return true;
};

Array.prototype._find = function(callback) {
  for (let element of this) {
    if (callback(element)) {
      return element;
    }
  }
  return undefined;
};

Array.prototype._map = function(callback) {
  const mappedArray = [];
  const pushToMappedArray = element => mappedArray.push(callback(element));
  this._forEach(pushToMappedArray);
  return mappedArray;
};

Array.prototype._filter = function(callback) {
  const newArray = [];
  this._forEach(element => {
    if (callback(element)) {
      newArray.push(element);
    }
  });
  return newArray;
};

Array.prototype._reduce = function(callback, initialValue) {
  if (this.length !== 0) {
    let index;
    let accumulator;
    if (initialValue === undefined) {
      index = 1;
      accumulator = this[0];
    } else {
      index = 0;
      accumulator = initialValue;
    }
    for (index; index < this.length; index++) {
      accumulator = callback(accumulator, this[index], index);
    }
    return accumulator;
  }
  return undefined;
};

Array.prototype._union = function(array) {
  const unionArray = [...this];
  const filteredArray = array._filter(element => !this._includes(element));
  filteredArray._forEach(element => unionArray.push(element));
  return unionArray;
};

Array.prototype._intersection = function(array) {
  return this._reduce((intersection, element) => {
    if (array._includes(element) && !intersection._includes(element)) {
      intersection.push(element);
    }
    return intersection;
  }, []);
};

Array.prototype._includes = function(element) {
  if (this._indexOf(element) > -1) {
    return true;
  }
  return false;
};

Array.prototype._sum = function() {
  const sum = (x, y) => x + y;
  return this._reduce(sum);
};

Array.prototype._indexOfRecursive = function(element, index = 0) {
  if (index === this.length) {
    return -1;
  } else {
    if (this[index] === element) {
      return index;
    } else {
      return this._indexOfRecursive(element, index + 1);
    }
  }
};

Array.prototype._indexOf = function(element) {
  for (let index = 0; index < this.length; index++) {
    if (this[index] == element) {
      return index;
    }
  }
  return -1;
};

Array.prototype._max = function() {
  return Math.max(...this);
};

Array.prototype._min = function() {
  return Math.min(...this);
};

Array.prototype._isEqual = function(arrayTwo) {
  return this.length === arrayTwo.length
    ? this._reduce((equal, cur, index) => {
        return cur !== arrayTwo[index] ? false : equal;
      }, true)
    : false;
};

Array.prototype._lastIndexOf = function(element) {
  for (let i = this.length - 1; i >= 0; i--) {
    if (this[i] === element) {
      return i;
    }
  }
  return -1;
};

Array.prototype._concat = function(...arrays) {
  return arrays._reduce((concatenatedArray, currentArray) => {
    for (let element of currentArray) {
      concatenatedArray.push(element);
    }
    return concatenatedArray;
  }, this);
};
