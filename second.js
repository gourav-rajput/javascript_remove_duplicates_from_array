
// If Array consists of the Integers only

const isArray = ele => {
  return ele && Array.isArray(ele) && ele instanceof Array
};

const isFunction = ele => {
  return ele && typeof ele === "function"
};

isObject = ele => {
  return ele && typeof ele === 'object' && Array.isArray(ele) === false;
};

const flatDeepArguments = data => {
  let dataLength = data.length;
  let flattenedArray = [];
  for (let i = 0; i < dataLength; i++) {
    let currentVal = data[i];
    if (isArray(currentVal)) {
      flattenedArray.push(...flatDeepArguments(currentVal));
    } else if (!isFunction(currentVal) && !isObject(currentVal)) {
      flattenedArray.push(currentVal);
    }
  }
  return [...flattenedArray];
};

const removeDuplicates = (...args) => {
  let flattenedArray = flatDeepArguments(args);
  let sortedArray = flattenedArray.sort(
    (a, b) => (a - b)
  );
  let uniqueArray = [];
  let temp = null;
  sortedArray.forEach(ele => {
    if (ele !== temp) {
      uniqueArray.push(ele);
      temp = ele;
    }
  });
  return [...uniqueArray];
};