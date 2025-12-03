
from math import gcd
from typing import List


class Solution:
    
    def getSlope(self, x1, y1, x2, y2):
        dy = y2 - y1
        dx = x2 - x1

        if dx == 0:
            return ('inf', 0)
        
        g = gcd(dy, dx)

        # normalize dy and dx
        dy = dy // g
        dx = dx // g

        # if dx is negative, remove the negative sign from dx and add it to dy
        if dx < 0:
          dy = -dy
          dx = -dx

        return (dy, dx)
    
    def countTrapezoids(self, points: List[List[int]]) -> int:

        gradients_map = {}

        # Calculate slope between every pair of points
        for first_point in range(len(points)):
            for second_point in range(first_point + 1, len(points)):
                y2 = points[second_point][1]
                y1 = points[first_point][1]
                
                x2 = points[second_point][0]
                x1 = points[first_point][0]

                slope = self.getSlope(x1, y1, x2, y2)

                gradients_map[slope] = gradients_map.get(slope, [])

                # store the indexes of two points that form the this slope
                gradients_map[slope].append((first_point, second_point))

        trapezoid_count = 0
        pararel_count = 0

        for slope in gradients_map:
            total_segment = len(gradients_map[slope])

            for i in range(total_segment):
                for j in range(i + 1, total_segment):
                    segment1 = gradients_map[slope][i]
                    segment2 = gradients_map[slope][j]

                    # check if all 4 points are distinct
                    a, b = segment1
                    c, d = segment2
                    
                    if a == c or a == d or b == c or b == d:
                        continue
                    
                    # check if both segments not in the same line by checking random cross pair not have same gradient
                    x1, y1 = points[a] # a
                    x2, y2 = points[b] # b

                    x3, y3 = points[c] # c
                    x4, y4 = points[d] # d

                    slope_ac = self.getSlope(x1, y1, x3, y3)
                    
                    if slope_ac == slope:
                        continue
                    
                    trapezoid_count += 1
                    
                    #check if this trapezoid are parallelogram
                    slope_ad = self.getSlope(x1, y1, x4, y4)
                    slope_bc = self.getSlope(x2, y2, x3, y3)
                    slope_bd = self.getSlope(x2, y2, x4, y4)

                    if (slope_ac == slope_bd) or (slope_ad == slope_bc):
                        pararel_count += 1

        result = trapezoid_count - pararel_count/2
        return int(result)


if __name__ == "__main__":
		points = [[-3,2],[3,0],[2,3],[3,2],[2,-3]]
		sol = Solution()
		result = sol.countTrapezoids(points)
		print(result)