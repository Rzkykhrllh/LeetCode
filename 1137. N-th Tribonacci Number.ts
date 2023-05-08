var memo: Array<number> = [];

for (var i = 0; i <= 37; i++) memo.push(0);
memo[1] = 1;
memo[2] = 1;

function tribonacci(n: number): number {
  if (n > 2 && memo[n] == 0) {
    memo[n] = tribonacci(n - 1) + tribonacci(n - 2) + tribonacci(n - 3);
  }

  return memo[n];
}
