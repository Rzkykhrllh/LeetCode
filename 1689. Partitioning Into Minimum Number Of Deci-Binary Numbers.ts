function minPartitions(n: string): number {
  var currentDigit;
  var maxDigit = 0;

  for (var i = 0; i < n.length; i++) {
    currentDigit = parseInt(n[i]);
    maxDigit = Math.max(maxDigit, currentDigit);
  }

  return maxDigit;
}
