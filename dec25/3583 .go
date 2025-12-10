import "math"

func specialTriplets(nums []int) int {

	const MOD = int(math.Pow(10, 9) + 7)

	right_frequency := make(map[int]int)
	left_frequency := make(map[int]int)

	for i := len(nums) - 1; i > -1; i-- {
		right_frequency[nums[i]] = right_frequency[nums[i]] + 1
	}

	triplet_count := 0

	for i := 0; i < len(nums); i++ {
		current_number := nums[i]

		right_frequency[current_number] -= 1
		target_number := 2 * current_number

		triplet_count += right_frequency[target_number] * left_frequency[target_number]
		triplet_count = triplet_count % MOD

		left_frequency[current_number] += 1
	}

	return triplet_count

}