class Solution:
    MOD = 10**9 + 7

    def countTrapezoids(self, points: list[list[int]]) -> int:
        
        occurance_map = {}
        for i in range(len(points)):
            y_cordinate = points[i][1]
            occurance_map[y_cordinate] = occurance_map.get(y_cordinate, 0) + 1

        combinations_map = {}
        for key in occurance_map:
            # nC2
            combinations_map[key] = (occurance_map[key] * (occurance_map[key] - 1)) // 2
        
        sum = 0
        sum_of_squres = 0

        for key in combinations_map:
            sum += combinations_map[key]
            sum = sum % self.MOD

            sum_of_squres += combinations_map[key] * combinations_map[key]
            sum_of_squres = sum_of_squres % self.MOD

        square_of_sum = (sum * sum) % self.MOD

        inverse_of_2 = pow(2, self.MOD - 2, self.MOD)

        result = (square_of_sum - sum_of_squres) % self.MOD
        result = (result * inverse_of_2) % self.MOD
        return result