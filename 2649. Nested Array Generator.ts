type MultidimensionalArray = (MultidimensionalArray | number)[];

// Main Function, convert array into Generator format
function* inorderTraversal(
  arr: MultidimensionalArray
): Generator<number, void, unknown> {
  var flattenedArray = [];
  flattenedArray = tranverse(arr);

  for (var i = 0; i < flattenedArray.length; i++) {
    yield flattenedArray[i];
  }
}

// Convert tree of array into one dimensional array
function tranverse(arr: MultidimensionalArray | number): any {
  var flattenedArray = [];
  if (Array.isArray(arr)) {
    for (var i = 0; i < arr.length; i++) {
      flattenedArray.push(...tranverse(arr[i]));
    }
  } else {
    flattenedArray.push(arr);
  }
  return flattenedArray;
}
