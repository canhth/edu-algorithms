# Container with the Most Water In

Given an array of heights of vertical lines at positions `0..i`, return max possible area between
the two lines in this set.

Example
-------

Given `[3, 2, 5, 4, 5]`, return `12`:

```txt 
     5   5
     # 4 #        #   #
 3   # # #        # # #
 # 2 # # # => #$$$$$$$# (4 x 3 = 12)
 # # # # #    #$$$$$$$#
 # # # # #    #$$$$$$$#
 0 1 2 3 4    0 1 2 3 4
```

Graphics
--------

![Board](https://user-images.githubusercontent.com/4989256/34916970-9ceb95b6-f948-11e7-8af7-106323225b5b.png)

---

[Problem Source](https://leetcode.com/problems/container-with-most-water/description/).