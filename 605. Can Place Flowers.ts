function canPlaceFlowers(flowerbed: number[], n: number): boolean {
  var start = 1;
  var count = 0;
  var arr = [];
  var total = 0;

  for (var i = 0; i < flowerbed.length; i++) {
    if (flowerbed[i] == 1) {
      if (count >= 2) arr.push(count);
      arr.push(0);
      count = 0;
    }
    if (flowerbed[i] == 0) {
      count++;
    }
  }

  if (count >= 2) arr.push(count);

  // Special case
  if (flowerbed.length == 1 && flowerbed[0] == 0) total++;

  console.log(arr);

  for (var i = 0; i < arr.length; i++) {
    if ((i == 0 || i == arr.length - 1) && arr[i] != 0) {
      // First or Last
      total += Math.floor((arr[i] + 1) / 2);
    } else if (arr[i] != 0) {
      // Mid
      total += Math.floor((arr[i] - 1) / 2);
    }
  }

  return total >= n;
}
