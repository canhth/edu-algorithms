# Frog Jump

A frog is crossing a river. You are given an array of stone positions (sorted distinct integers). A
frog starts from the first stone position and must appear at the last stone position to cross the
river. Frog begins to jump by `length = 1`. Each next jump a frog can decide to jump for 
`length + [-1..1]`. Find out whether it is possible to cross the river with this scenario.

Example
-------

You are given a stones array `[0,1,3,5,6,8,12,17]`.

There are a total of 8 stones. The first stone at the 0th unit, second stone at the 1st unit,
third stone at the 3rd unit, and so on... The last stone at the 17th unit.

The frog can jump to the last stone by jumping 1 unit to the 2nd stone, then 2 units to the 3rd 
stone, then 2 units to the 4th stone, then 3 units to the 6th stone, 4 units to the 7th stone, and 5 
units to the 8th stone.

If you are given an array of `[0,1,2,3,4,8,9,11]`, it's not possible.
There is no way to jump to the last stone as the gap between the 5th and 6th stone is too large.

Graphics
--------

![img_3668](https://user-images.githubusercontent.com/4989256/32445663-1c6549f6-c30f-11e7-8751-dd83460cfd15.jpg)

---

[Problem Source](https://leetcode.com/problems/frog-jump/description/).