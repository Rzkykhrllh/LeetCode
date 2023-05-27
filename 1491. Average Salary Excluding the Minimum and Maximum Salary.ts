function average(salary: number[]): number {
  var min = 999999;
  var max = -1;
  var total = 0;
  var count = 0;

  for (var i = 0; i < salary.length; i++) {
    if (salary[i] < min) min = salary[i];
    if (salary[i] > max) max = salary[i];
  }

  for (var i = 0; i < salary.length; i++) {
    if (salary[i] > min && salary[i] < max) {
      total += salary[i];
      count++;
    }
  }

  return total / count;
}
