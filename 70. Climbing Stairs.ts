var memo: Array<number> = [];

for (var i = 0; i <= 45; i++) memo.push(-1);

function climbStairs(n: number): number {
  if (n == 1) {
    return 1;
  } else if (n == 2) {
    return 2;
  } else if (memo[n] != -1) {
    return memo[n];
  } else {
    memo[n] = climbStairs(n - 1) + climbStairs(n - 2);
    return memo[n];
  }
}
