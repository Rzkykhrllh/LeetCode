class Solution:
    def countCoveredBuildings(self, n: int, buildings: List[List[int]]) -> int:


        city_matrix = [[0 for _ in range(n)] for _ in range(n)]
        
        for building in buildings:
            x, y = building
            city_matrix[y][x] = 1
        
        most_left = [-1 for _ in range(n)]
        most_right = [-1 for _ in range(n)]
        most_top = [-1 for _ in range(n)]
        most_bottom = [-1 for _ in range(n)]

        for i in range(n):
            for j in range(n):
                
                if city_matrix[i][j] == 1:
                    if most_left[i] == -1:
                        most_left[i] = j
                    
                    if j > most_right[i]:
                        most_right[i] = j
                    if most_top[j] == -1:
                        most_top[j] = i
                    if i > most_bottom[j]:
                        most_bottom[j] = i

        covered_count = 0
        for i in range(n):
            for j in range(n):
                if city_matrix[i][j] == 1 and (most_left[i] < j and most_right[i] > j and most_top[j] < i and most_bottom[j] > i):
                    covered_count += 1
                    
        return covered_count


if __name__ == "__main__":
    n = 5
    buildings = [[1,1],[2,1],[3,1],[2,2],[2,3]]
    sol = Solution()
    print(sol.countCoveredBuildings(n, buildings))
              
            
        
        