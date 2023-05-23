function maximumUnits(boxTypes: number[][], truckSize: number): number {
  boxTypes.sort((a, b) => b[1] - a[1]);

  var totalUnits = 0;

  for (var i = 0; i < boxTypes.length; i++) {
    if (truckSize > boxTypes[i][0]) {
      totalUnits += boxTypes[i][0] * boxTypes[i][1];
      truckSize -= boxTypes[i][0];
    } else if (truckSize > 0) {
      totalUnits += truckSize * boxTypes[i][1];
      truckSize = 0;
    }
  }

  return totalUnits;
}
