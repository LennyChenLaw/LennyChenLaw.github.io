# Leetcode
!!! info 
    记录一下学习Leetcode的过程

1. [两数之和](https://leetcode-cn.com/problems/two-sum) | [Two Sum](https://leetcode-cn.com/problems/two-sum)
+ 题目描述：
``` 
Given an array of integers, return indices of the two numbers such that they add up to a specific target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

Example:

Given nums = [2, 7, 11, 15], target = 9,

Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].
```
+ 题解（Python）
```Python 
class Solution:
    def twoSum(self, nums, target):
        hashtable = {}
        for i, num in enumerate(nums):
            if target - num in hashtable:
                return [hashtable[target - num], i]
            hashtable[num] = i
        return []
```

