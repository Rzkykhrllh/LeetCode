class Solution:
    def countPartitions(self, nums: list[int], k: int) -> int:
        n = len(nums)

        dp = []
        # print("n:", n)
        # print("--")

        #Base case
        # f[0] = 1
        dp.append(1)
        current_min = nums[0]
        current_max = nums[0]

        # i means current right
        for i in range(1, n):
            dp.append(0) # at least every partition only contains nums[i]

            # print("i:", i)
            # print(dp)

            current_min = nums[i]
            current_max = nums[i]
            
            # j means current left
            for j in range(i, -1, -1):
                current_min = nums[j] if nums[j] < current_min else current_min
                current_max = nums[j] if nums[j] > current_max else current_max

                # print(" j:", j)
                # print(f"current_dp_[{i}]",dp[i])
                # print(current_min, current_max, current_max-current_min)

                # Print Helpers
                str_val = ""
                for f in range(0,i+1):
                    if f==j:
                        str_val += "|"
                    str_val += str(nums[f])
                # print("str:", str_val)

                if (current_max - current_min) <= k:
                    new_value = dp[j-1] if j > 0 else 1
                    # print("  new_value:", new_value)
                    dp[i] += new_value % (10**9 + 7)
                else:
                    # print("  break")
                    # print(current_min, current_max)
                    break
                
            # print(dp)
            # print()
        return dp[n-1]


if __name__ == "__main__":
    nums = [9,4,1,3,7]
    k = 4
    sol = Solution()
    result = sol.countPartitions(nums, k)
    print("Number of partitions:", result)