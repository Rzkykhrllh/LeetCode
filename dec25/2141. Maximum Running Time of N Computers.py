class Solution:
    def maxRunTime(self, n: int, batteries: List[int]) -> int:
      # Binary Search Solution
        left = 1
        right = sum(batteries) // n

        while left < right:
            mid = (left + right + 1) // 2
            total_possible_minutes = 0

            for battery in batteries:
                total_possible_minutes += min(battery, mid)

            if total_possible_minutes >= mid * n:
                left = mid
            else:
                right = mid - 1
      
        return left