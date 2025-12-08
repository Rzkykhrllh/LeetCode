class Solution:
    def countTriples(self, n: int) -> int:
        result = 0 

        for a in range (2,250):
            for b in range (2,250):
                c = a*a + b*b
                sqrt_c = int(math.sqrt(c))

                if sqrt_c>n:
                    continue

                if (c == sqrt_c*sqrt_c):
                    result+=1

        return result
