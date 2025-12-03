
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
    
    def getC(self, x, y, slope):
        # c = y - mx
        # c = y - (dy/dx)*x
        # c = (y*dx - dy*x)/dx
   
            # Handle vertical line (slope = ('inf', 0))
        if slope[0] == 'inf':
            # For vertical lines, use x as the intercept
            return (x, 1)
        
        c_upper = (y * slope[1]) - (slope[0] * x)
        c_lower = slope[1]
        
        gcd_c = gcd(c_upper, c_lower)
        c = (c_upper // gcd_c, c_lower // gcd_c)

        return c

    def countTrapezoids(self, points: List[List[int]]) -> int:

        c_list = {}
        m_and_c_map = {}

        # Calculate slope between every pair of points
        for first_point in range(len(points)):
            for second_point in range(first_point + 1, len(points)):
                y2 = points[second_point][1]
                y1 = points[first_point][1]
                
                x2 = points[second_point][0]
                x1 = points[first_point][0]

                slope = self.getSlope(x1, y1, x2, y2)
                c = self.getC(x1, y1, slope)

                # store the indexes of two points that form the this slope
                m_and_c_map[(slope, c)] = m_and_c_map.get((slope, c), set())
                m_and_c_map[(slope, c)].add(first_point)
                m_and_c_map[(slope, c)].add(second_point)

                # Store C values of each slope
                c_list[slope] = c_list.get(slope, set())
                c_list[slope].add(c)

        trapezoid_count = 0
        pararel_count = 0

        for slope in c_list:
            total_c = len(c_list[slope])

            for i in range(total_c):
                for j in range(i + 1, total_c):
                    c1 = list(c_list[slope])[i]
                    c2 = list(c_list[slope])[j]

                    points_mc1 = m_and_c_map[(slope, c1)]
                    points_mc2 = m_and_c_map[(slope, c2)]

                    # count the trapezoids that can be formed using these two lines
                    combination_mc_1 = len(points_mc1)
                    combination_mc_1 = combination_mc_1 * (combination_mc_1 - 1) // 2

                    combination_mc_2 = len(points_mc2)
                    combination_mc_2 = combination_mc_2 * (combination_mc_2 - 1) // 2
                    trapezoid_count += combination_mc_1 * combination_mc_2

                    # count the parallelograms that can be formed using these two lines
                    vector_count = {}
                    for p1 in points_mc1:
                        for p2 in points_mc2:
                            vec = (points[p2][0] - points[p1][0], points[p2][1] - points[p1][1])
                            vector_count[vec] = vector_count.get(vec, 0) + 1
                    
                    for vec in vector_count:
                        k = vector_count[vec]
                        if k >= 2:
                            pararel_count += k * (k - 1) // 2

        result = trapezoid_count - pararel_count // 2
        return result


if __name__ == "__main__":
		points = [[-3,2],[3,0],[2,3],[3,2],[2,-3]]
		sol = Solution()
		result = sol.countTrapezoids(points)
		print(result)