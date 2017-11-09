# Burst Balloons

Given `n` balloons, indexed from `0` to `n-1`. Each balloon is painted with a number on it 
represented by array nums. You are asked to burst all the balloons. If the you burst balloon `i` 
you will get `nums[left] * nums[i] * nums[right]` points. Here `left` and `right` are adjacent 
indices of `i`. After the burst, the `left` and `right` balloons then becomes adjacent.

Find the maximum points you can collect by bursting the balloons wisely.

1. You may imagine `nums[-1] = nums[n] = 1`. They are not real therefore you can not burst them.
2. 0 ≤ `n` ≤ 500, 0 ≤ `nums[i]` ≤ 100

Example
-------

Given `[3, 1, 5, 8]`, return `167`.

```js
    nums = [3,1,5,8] --> [3,5,8] -->   [3,8]   -->  [8]  --> [];
   coins =  3*1*5      +  3*5*8    +  1*3*8      + 1*8*1 === 167;
```

Graphics
--------

![Board 1](https://user-images.githubusercontent.com/4989256/32630322-f5911358-c5a4-11e7-9cb8-b355e4b06af5.jpg)
![Board 2](https://user-images.githubusercontent.com/4989256/32630351-0a0339b0-c5a5-11e7-8d8f-2c9da841054b.jpg)

---

[Problem Source](https://leetcode.com/problems/burst-balloons/description/).