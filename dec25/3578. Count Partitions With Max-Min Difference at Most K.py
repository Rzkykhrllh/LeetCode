class Solution:
    def countPartitions(self, nums: list[int], k: int) -> int:
        n = len(nums)

        dp = []
        dp.append(1)
        current_min = nums[0]
        current_max = nums[0]

        # i means current right
        for i in range(1, n):
            dp.append(0) # at least every partition only contains nums[i]

            current_min = nums[i] if nums[i] < current_min else current_min
            current_max = nums[i] if nums[i] > current_max else current_max
            
            # j means current left
            for j in range(i, -1, -1):
                current_min = nums[j] if nums[j] < current_min else current_min
                current_max = nums[j] if nums[j] > current_max else current_max

                if (current_max - current_min) <= k:
                    new_value = dp[j-1] if j > 0 else 1
                    dp[i] += new_value
                    dp[i] = dp[i] % (10**9 + 7)
                else:
                    break
                
        return dp[n-1] % (10**9 + 7)


if __name__ == "__main__":
    nums = [9,4,1,3,7]
    k = 4
    sol = Solution()
    result = sol.countPartitions(nums, k)
    print("Number of partitions:", result)