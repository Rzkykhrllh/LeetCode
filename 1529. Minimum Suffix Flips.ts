function minFlips(target: string): number {
  var flip = 0;

  if (target[0] == "1") flip = 1;

  for (var i = 1; i < target.length; i++) {
    if (target[i] == "1" && target[i - 1] == "0") flip++;
    if (target[i] == "0" && target[i - 1] == "1") flip++;
  }

  return flip;
}
