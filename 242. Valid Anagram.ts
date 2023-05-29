function isAnagram(s: string, t: string): boolean {
  let sortString = (str) => {
    return [...str].sort((a, b) => a.localeCompare(b)).join("");
  };

  var s = sortString(s);
  var t = sortString(t);

  return s === t;
}
