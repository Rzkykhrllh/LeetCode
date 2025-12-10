class Solution:
    def countPermutations(self, complexity: List[int]) -> int:

        isPossible = True
        solution = 1

        for i in range(1,len(complexity), 1):
            if (complexity[0] >= complexity[i]):
                isPossible = False
            else:
                solution = solution * i
                solution = solution % (10**9 + 7)
        
        return solution if isPossible else 0

        