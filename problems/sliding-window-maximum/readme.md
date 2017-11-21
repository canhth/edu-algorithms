# Sliding Window Maximum

Given an array nums, there is a sliding window of size k which is moving from the very left of the 
array to the very right. You can only see the k numbers in the window. Each time the sliding window 
moves right by one position.

For example,
Given nums = `[1,3,-1,-3,5,3,6,7]`, and k = 3.

```txt
Window position                Max
---------------               -----
[1  3  -1] -3  5  3  6  7       3
 1 [3  -1  -3] 5  3  6  7       3
 1  3 [-1  -3  5] 3  6  7       5
 1  3  -1 [-3  5  3] 6  7       5
 1  3  -1  -3 [5  3  6] 7       6
 1  3  -1  -3  5 [3  6  7]      7
```

Therefore, return the max sliding window as `[3,3,5,5,6,7]`.

Could you solve it in linear time?

Graphics
--------

![Whiteboard](https://user-images.githubusercontent.com/4989256/33095321-ed4d69f6-cf0b-11e7-9b48-1be23cd763ee.JPG)

---

[Problem Source](https://leetcode.com/problems/sliding-window-maximum/description/)
