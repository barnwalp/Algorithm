"""
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

 

Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Output: Because nums[0] + nums[1] == 9, we return [0, 1].
"""
class Solution(object):
    def twoSum(self, nums, target):
        for i_1, val in enumerate(nums):
            val_2 = target - val
            if val_2 in nums:
                return [i_1, nums.index(val_2)]

if __name__ == '__main__':
    test = Solution()
    print(test.twoSum([3, 2, 4], 6))