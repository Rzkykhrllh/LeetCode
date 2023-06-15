function pancakeSort(arr: number[]): number[] {
  function reverseArraySlice(arr, a, b) {
    // Copy Array
    const newArr = arr.slice();

    // Insert new element to array
    // a: First Index, b-1+a: number element to be deleted, reversed array to insert
    newArr.splice(a, b - a + 1, ...newArr.slice(a, b + 1).reverse());

    return newArr;
  }

  var result = [];
  console.log(arr);

  for (var i = arr.length - 1; i >= 0; i--) {
    var target = i + 1;
    console.log(target);

    for (var j = i - 1; j >= 0; j--) {
      if (arr[j] == target) {
        console.log(i, j);

        result.push(j + 1);
        arr = reverseArraySlice(arr, 0, j);
        console.log(arr);

        result.push(i + 1);
        arr = reverseArraySlice(arr, 0, i);
        console.log(arr);

        break;
      }
    }
  }

  return result;
}
