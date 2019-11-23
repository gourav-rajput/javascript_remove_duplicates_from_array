
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
  return [...new Set(flattenedArray)];
};