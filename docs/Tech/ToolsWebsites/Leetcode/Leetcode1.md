# Leetcode Problem 1 To 10
第一题：[两数之和](https://leetcode-cn.com/problems/two-sum) | [Two Sum](https://leetcode-cn.com/problems/two-sum)
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

第二题：[Add Two Numbers](https://leetcode.com/problems/add-two-numbers/description/)
+ 题解（Python）
```Python
class Solution(object):
    def addTwoNumbers(self, l1, l2):
        s=""
        head1=l1
        while head1 is not None:
            s=s+str(head1.val)
            head1=head1.next
        s2=""
        head2=l2
        while head2 is not None:
            s2=s2+str(head2.val)
            head2=head2.next
        
            
        n=int(s[::-1])+int(s2[::-1])
        j=str(n)
        new=None
        for i in j[::-1]:
            t=ListNode(int(i))
            if(new==None):
                new=t
                newhead=new
            else:
                newhead.next=t
                newhead=t
        return new
```

第三题：[Longest Substring Without Repeating Characters](https://leetcode.com/problems/longest-substring-without-repeating-characters/description/)
+ 题解（Python）
```Python
class Solution:
    def lengthOfLongestSubstring(self, s):
        char_set = set()
        l = 0
        max_len = 0
        
        for r in range(len(s)):
            while s[r] in char_set:
                char_set.remove(s[l])
                l += 1
            char_set.add(s[r])
            max_len = max(max_len, r - l + 1)
        
        return max_len
```

第四题：[Median of Two Sorted Arrays](https://leetcode.com/problems/median-of-two-sorted-arrays/description/)
+ 题解（Python）
```Python
class Solution:
    def findMedianSortedArrays(self, nums1, nums2):
        n1, n2 = len(nums1), len(nums2)
        
        # Ensure nums1 is the smaller array
        if n1 > n2:
            nums1, nums2, n1, n2 = nums2, nums1, n2, n1
        
        total_len = n1 + n2
        half_len = (total_len + 1) // 2
        
        low, high = 0, n1
        
        while low <= high:
            mid1 = (low + high) // 2
            mid2 = half_len - mid1
            
            # Handling out-of-bound indices
            l1 = nums1[mid1 - 1] if mid1 > 0 else float('-inf')
            r1 = nums1[mid1] if mid1 < n1 else float('inf')
            l2 = nums2[mid2 - 1] if mid2 > 0 else float('-inf')
            r2 = nums2[mid2] if mid2 < n2 else float('inf')
            
            # Check if partition is correct
            if l1 <= r2 and l2 <= r1:
                # Found the median
                if total_len % 2 == 1:
                    return max(l1, l2)  # Odd length case
                else:
                    return (max(l1, l2) + min(r1, r2)) / 2.0  # Even length case
            elif l1 > r2:
                high = mid1 - 1  # Move left in nums1
            else:
                low = mid1 + 1  # Move right in nums1
        
        # In case input arrays are not sorted, which theoretically shouldn't happen for valid inputs
        raise ValueError("Input arrays are not sorted")

```

第五题：[Longest Palindromic Substring](https://leetcode.com/problems/longest-palindromic-substring/description/)
+ 题解（Python）
```Python
class Solution:
    def longestPalindrome(self, s):
        if not s:
            return ""
        
        start, max_len = 0, 1

        def expand_around_center(left, right):
            while left >= 0 and right < len(s) and s[left] == s[right]:
                left -= 1
                right += 1
            return left + 1, right - 1
        
        for i in range(len(s)):
            # Case 1: Odd-length palindrome
            left1, right1 = expand_around_center(i, i)
            if right1 - left1 + 1 > max_len:
                start, max_len = left1, right1 - left1 + 1
            
            # Case 2: Even-length palindrome
            left2, right2 = expand_around_center(i, i + 1)
            if right2 - left2 + 1 > max_len:
                start, max_len = left2, right2 - left2 + 1

        return s[start:start + max_len]
```

第六题：[Zigzag Conversion](https://leetcode.com/problems/zigzag-conversion/description/)
+ 题解（Python3）
```Python
class Solution:
    def convert(self, s: str, numRows: int) -> str:
        if numRows == 1:
            return s
        
        rows = [""] * min(numRows, len(s))
        cur_row, going_down = 0, False
        
        for c in s:
            rows[cur_row] += c
            if cur_row == 0 or cur_row == numRows - 1:
                going_down = not going_down
            cur_row += 1 if going_down else -1
        
        return "".join(rows)
```

第七题：[Reverse Integer](https://leetcode.com/problems/reverse-integer/description/)
+ 题解（Python3）
```Python
class Solution:
    def reverse(self, x: int) -> int:
        sign = -1 if x < 0 else 1
        x *= sign
        rev = 0
        while x:
            rev = rev * 10 + x % 10
            x //= 10
        rev *= sign
        if rev < -2**31 or rev > 2**31 - 1:
            return 0
        return rev
```

第八题：[String to Integer (atoi)](https://leetcode.com/problems/string-to-integer-atoi/description/)
+ 题解（Python3）
```Python
class Solution:
    def myAtoi(self, s: str) -> int:
        s = s.strip()
        if not s:
            return 0
        
        sign = -1 if s[0] == '-' else 1
        if s[0] in ['-', '+']:
            s = s[1:]
        
        res, i = 0, 0
        while i < len(s) and s[i].isdigit():
            res = res * 10 + int(s[i])
            i += 1
        
        res *= sign
        return max(-2**31, min(res, 2**31 - 1))
```

第九题：[Palindrome Number](https://leetcode.com/problems/palindrome-number/description/)
+ 题解（Python3）
```Python
class Solution:
    def isPalindrome(self, x: int) -> bool:
        if x < 0:
            return False
        return str(x) == str(x)[::-1]
```

第十题：[Regular Expression Matching](https://leetcode.com/problems/regular-expression-matching/description/)
+ 题解（Python3）
```Python
class Solution:
    def isMatch(self, s: str, p: str) -> bool:
        dp = [[False] * (len(p) + 1) for _ in range(len(s) + 1)]
        dp[0][0] = True
        
        for j in range(2, len(p) + 1):
            if p[j - 1] == '*':
                dp[0][j] = dp[0][j - 2]
        
        for i in range(1, len(s) + 1):
            for j in range(1, len(p) + 1):
                if p[j - 1] == '.' or p[j - 1] == s[i - 1]:
                    dp[i][j] = dp[i - 1][j - 1]
                elif p[j - 1] == '*':
                    dp[i][j] = dp[i][j - 2] or (dp[i - 1][j] if p[j - 2] == s[i - 1] or p[j - 2] == '.' else False)
        
        return dp[len(s)][len(p)]
```
