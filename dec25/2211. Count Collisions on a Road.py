class Solution:
    def countCollisions(self, directions: str) -> int:

        road_length = len(directions)

        i = 0
        result = 0

        left_car = directions[0]
        if road_length > 1:
            right_car = directions[1]
        else:
            right_car = ''

        prev_r = 0

        while (i < road_length-1):
            right_car = directions[i + 1]

            if (left_car == 'R' and right_car == 'L'):
                result+=2
                result+=prev_r
                prev_r=0
                right_car = 'S'
            elif (left_car == 'R' and right_car == 'S'):
                result+=1
                result+=prev_r
                prev_r=0
                right_car = 'S'
            elif (left_car == 'S' and right_car == 'L'):
                result+=1
                right_car = 'S'
            elif (left_car == 'R' and right_car == 'R'):
                prev_r+=1
          

            i += 1
            left_car = right_car

        return result

if __name__ == "__main__":
    directions = "R"
    # "SSRS[1]SRL[3]L[4]RS[5]L[6]L[7]RS[8]RS[9]SRL[11] RRRRLLRRLSSRR"

    sol = Solution()
    result = sol.countCollisions(directions)
    print("Collisions:", result)
    