function minimumSum(num: number): number {
  var arr = [];

  while (num > 0) {
    arr.push(num % 10);
    num = Math.floor(num / 10);
  }

  arr.sort();

  return (arr[0] + arr[1]) * 10 + arr[2] + arr[3];
}
