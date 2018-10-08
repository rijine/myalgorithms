# 202. Happy Number
# Write an algorithm to determine if a number is "happy".

# A happy number is a number defined by the following process: Starting with any positive integer, replace the number by the sum of the squares of its digits, and repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1. Those numbers for which this process ends in 1 are happy numbers.

# Example: 

# Input: 19
# Output: true
# # Explanation: 
# 12 + 92 = 82
# 82 + 22 = 68
# 62 + 82 = 100
# 12 + 02 + 02 = 1

class Solution(object):
    def isHappy(self, n):
        hashtable = {}


        while(n != 1):

            if n in hashtable:
                return False
            else: 
                hashtable[n] = True
                print(hashtable)

            sum1 = 0
            while(n != 0):
                r = n%10
                sum1 += pow(r,2)
                # intege division and / is ploting point division
                n = n // 10
            n = sum1

        return True