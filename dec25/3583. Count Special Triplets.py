class Solution:
    def specialTriplets(self, nums: List[int]) -> int:

      right_frequency = {}
      left_frequency = {}

      for i in range(len(nums)-1, -1, -1):
        # Increment count for nums[i], start from 0 if not present
        right_frequency[nums[i]] = right_frequency.get(nums[i], 0) + 1
            
      triplet_count = 0

      
      for i in range (len(nums)):
        current_number = nums[i]

        # Decrease the right frequency of nums[i]
        right_frequency[current_number] -= 1

        target_number = current_number * 2
        triplet_count += left_frequency.get(target_number, 0) * right_frequency.get(target_number, 0)

        triplet_count %= (10**9 + 7)

        # Increase the left frequncey of nums[i]
        left_frequency[current_number] = left_frequency.get(current_number, 0) + 1
        
      return triplet_count