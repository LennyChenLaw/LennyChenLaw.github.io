# Leetcode Problem 11 To 20
### 第11题：[Container With Most Water](https://leetcode.com/problems/container-with-most-water/description/)
+ 题解（Python3）
```python
class Solution:
    def maxArea(self, height) -> int:
        left, right = 0, len(height) - 1
        max_area = 0
        while left < right:
            width = right - left
            max_area = max(max_area, min(height[left], height[right]) * width)
            if height[left] < height[right]:
                left += 1
            else:
                right -= 1
        return max_area
```

---

### 第12题：[Integer to Roman](https://leetcode.com/problems/integer-to-roman/description/)
+ 题解（Python3）
```python
class Solution:
    def intToRoman(self, num: int) -> str:
        val = [
            1000, 900, 500, 400, 
            100, 90, 50, 40, 
            10, 9, 5, 4, 
            1
        ]
        symbols = [
            "M", "CM", "D", "CD", 
            "C", "XC", "L", "XL", 
            "X", "IX", "V", "IV", 
            "I"
        ]
        roman = ""
        for i in range(len(val)):
            while num >= val[i]:
                num -= val[i]
                roman += symbols[i]
        return roman
```

---

### 第13题：[Roman to Integer](https://leetcode.com/problems/roman-to-integer/description/)
+ 题解（Python3）
```python
class Solution:
    def romanToInt(self, s: str) -> int:
        roman = {
            'I': 1, 'V': 5, 'X': 10, 'L': 50, 
            'C': 100, 'D': 500, 'M': 1000
        }
        total = 0
        prev = 0
        for char in s:
            curr = roman[char]
            if curr > prev:
                total += curr - 2 * prev
            else:
                total += curr
            prev = curr
        return total
```

---

### 第14题：[Longest Common Prefix](https://leetcode.com/problems/longest-common-prefix/description/)
+ 题解（Python3）
```python
class Solution:
    def longestCommonPrefix(self, strs) -> str:
        if not strs:
            return ""
        prefix = strs[0]
        for string in strs[1:]:
            while string.find(prefix) != 0:
                prefix = prefix[:-1]
                if not prefix:
                    return ""
        return prefix
```

---

### 第15题：[3Sum](https://leetcode.com/problems/3sum/description/)
+ 题解（Python3）
```python
class Solution:
    def threeSum(self, nums):
        nums.sort()
        res = []
        for i in range(len(nums) - 2):
            if i > 0 and nums[i] == nums[i - 1]:
                continue
            left, right = i + 1, len(nums) - 1
            while left < right:
                total = nums[i] + nums[left] + nums[right]
                if total == 0:
                    res.append([nums[i], nums[left], nums[right]])
                    while left < right and nums[left] == nums[left + 1]:
                        left += 1
                    while left < right and nums[right] == nums[right - 1]:
                        right -= 1
                    left += 1
                    right -= 1
                elif total < 0:
                    left += 1
                else:
                    right -= 1
        return res
```

---

### 第16题：[3Sum Closest](https://leetcode.com/problems/3sum-closest/description/)
+ 题解（Python3）
```python
class Solution:
    def threeSumClosest(self, nums, target: int) -> int:
        nums.sort()
        closest = float('inf')
        for i in range(len(nums) - 2):
            left, right = i + 1, len(nums) - 1
            while left < right:
                total = nums[i] + nums[left] + nums[right]
                if abs(total - target) < abs(closest - target):
                    closest = total
                if total < target:
                    left += 1
                elif total > target:
                    right -= 1
                else:
                    return total
        return closest
```

---

### 第17题：[Letter Combinations of a Phone Number](https://leetcode.com/problems/letter-combinations-of-a-phone-number/description/)
+ 题解（Python3）
```python
class Solution:
    def letterCombinations(self, digits: str):
        if not digits:
            return []
        
        phone = {
            '2': 'abc', '3': 'def', '4': 'ghi', '5': 'jkl', 
            '6': 'mno', '7': 'pqrs', '8': 'tuv', '9': 'wxyz'
        }
        
        def backtrack(index, path):
            if len(path) == len(digits):
                combinations.append(path)
                return
            for letter in phone[digits[index]]:
                backtrack(index + 1, path + letter)
        
        combinations = []
        backtrack(0, "")
        return combinations
```

---

### 第18题：[4Sum](https://leetcode.com/problems/4sum/description/)
+ 题解（Python3）
```python
class Solution:
    def fourSum(self, nums, target: int):
        nums.sort()
        res = []
        for i in range(len(nums) - 3):
            if i > 0 and nums[i] == nums[i - 1]:
                continue
            for j in range(i + 1, len(nums) - 2):
                if j > i + 1 and nums[j] == nums[j - 1]:
                    continue
                left, right = j + 1, len(nums) - 1
                while left < right:
                    total = nums[i] + nums[j] + nums[left] + nums[right]
                    if total == target:
                        res.append([nums[i], nums[j], nums[left], nums[right]])
                        while left < right and nums[left] == nums[left + 1]:
                            left += 1
                        while left < right and nums[right] == nums[right - 1]:
                            right -= 1
                        left += 1
                        right -= 1
                    elif total < target:
                        left += 1
                    else:
                        right -= 1
        return res
```

---

### 第19题：[Remove Nth Node From End of List](https://leetcode.com/problems/remove-nth-node-from-end-of-list/description/)
+ 题解（Python3）
```python
class Solution:
    def removeNthFromEnd(self, head, n: int):
        dummy = ListNode(0)
        dummy.next = head
        first = second = dummy
        for _ in range(n + 1):
            first = first.next
        while first:
            first = first.next
            second = second.next
        second.next = second.next.next
        return dummy.next
```

---

### 第20题：[Valid Parentheses](https://leetcode.com/problems/valid-parentheses/description/)
+ 题解（Python3）
```python
class Solution:
    def isValid(self, s: str) -> bool:
        stack = []
        mapping = {')': '(', '}': '{', ']': '['}
        for char in s:
            if char in mapping:
                top_element = stack.pop() if stack else '#'
                if mapping[char] != top_element:
                    return False
            else:
                stack.append(char)
        return not stack
```