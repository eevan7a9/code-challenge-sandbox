const flattenArray = function(arr) {
  let flettend = [];
  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];
    if (Array.isArray(item)) {
      //   flettend = [flettend, ...flattenArray(item)];
      flettend.push(...flattenArray(item));
    } else {
      flettend.push(item);
    }
  }
  return flettend;
};

const uglyArray = [[2, 3], 4, 5, [3, 4, [5, 6, [3, 3]]]];

const result = flattenArray(uglyArray);
console.log(result, result.length);
