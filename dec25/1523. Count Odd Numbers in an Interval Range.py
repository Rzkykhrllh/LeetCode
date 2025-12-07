class Solution:
    def countOdds(self, low: int, high: int) -> int:
        
        count=0
        
        if (high%2==1):
            count+= 1
            high-=1

        if (low%2==1):
            count+= 1
            low+=1


        count += (high-low)//2
        

        return count
        