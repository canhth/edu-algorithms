# Algorithmic Problems and their JavaScript Solutions

[![npm](https://travis-ci.org/ZitRos/edu-algorithms.svg?branch=master)](https://travis-ci.org/ZitRos/edu-algorithms)

Algorithmic problems and their solutions. This repository is for educational purposes.

Problems
--------

| Column            | Description                                                                           |
|-------------------|---------------------------------------------------------------------------------------|
| Problem Name      | A short recognizable problem name. DP - Dynamic Programming, DFS/BFS - graph searches |
| Level             | Opinionated problem level 0-5 (lower-higher), * stands for tricky solution            |
| Complexity        | Solution complexity level (time/space)                                                |
| Short Description | A short description of the problem                                                    | 

| Problem Name                                                                                 | Level | Complexity                            | Short Description                                                                                          |
|----------------------------------------------------------------------------------------------|-------|---------------------------------------|------------------------------------------------------------------------------------------------------------|
| [Heap Sort](problems/heap-sort)                                                              | B/3   | O(n×log(n))/O(1)                      | Perform a heap sort                                                                                        |
| [Hamming Distance](problems/hamming-distance)                                                | 1     | O(n)/O(1)                             | Find a number of different bits in two positive integers                                                   |
| [Doubly Linked List Insertion](problems/doubly-linked-list-insertion)                        | 1     | O(n)/O(1)                             | Insert a new element to doubly linked list in such way to keep the list sorted.                            |
| [Strobogrammatic numbers](problems/strobogrammatic-number)                                   | 2     | Several                               | Check for and generate specific type of numbers (which look same rotated 180 deg)                          |
| [Count Bits from 0 to N](problems/count-bits-from-0-to-n)                                    | 2*    | O(n)/O(n)                             | Return the array of 1s number in bits of each integer from 0 to N                                          |
| [Maximum Indivisible Set in Range](problems/maximum-indivisible-set-in-range)                | 3*    | O(n)/O(n)                             | Find a longest set of mutually indivisible integers in a given range                                       |
| [Spiral Matrix](problems/spiral-matrix)                                                      | 3     | O(n)/O(n)                             | Having 2D matrix with N elements, output it in spiral order                                                |
| [Frog Jump](problems/frog-jump) (DP)                                                         | 4     | O(n<sup>2</sup>)/O(n<sup>2</sup>)     | Find out whether frog can cross the river by jumping through the given stones                              |
| [Serialize Binary Tree](problems/serialize-binary-tree)                                      | 4     | O(n)/O(n)                             | Write function to serialize and deserialize binary tree effectively                                        |
| [Equalize Array](problems/equalize-array)                                                    | 4*    | O(n)/O(1)                             | Make all the numbers in the array equal by doing certain operations                                        |
| [Products of Array Except i-th Element](problems/products-of-array-except-ith-element) (DP)  | 4*    | O(n)/O(1)                             | Given an array of integers, get an array of products of all the integers except i-th one without division  |
| [Longest Increasing Path in a Matrix](problems/longest-increasing-path-in-a-matrix) (BFS+DP) | 5     | O(n<sup>2</sup>)/O(n<sup>2</sup>)     | Given an integer matrix, find the length of the longest increasing path                                    |
| [Count Swaps to Sort](problems/count-swaps-to-sort)                                          | 5     | O(n×log(n))/O(n)                      | Count the number of swaps of adjacent elements required to sort the array                                  |
| [Running Median](problems/running-median)                                                    | 5     | O(n×log(n))/O(n)                      | Return N numbers which represent the medians of the sorted array, formed from each 0..N input array        |
| [Sliding Window Maximum](problems/sliding-window-maximum)                                    | 5     | O(n)/O(k)                             | Taking k elements from the array while going from left to right by i += 1, return the array of maximums    |
| [Test Regular Expression](problems/test-regular-expression) (Recursive)                      | 5     | O(n<sup>2</sup>)/O(n)                 | Test whether string matches regular expression with `.`, `*` and letters                                   |
| [Trapping Rain Water](problems/trapping-rain-water)                                          | 5     | O(n)/O(1)                             | Compute how much water it is able to trap after raining                                                    |
| [Word Ladder](problems/word-ladder) (DFS, BFS)                                               | 5     | O(n<sup>2</sup>×w)/O(n<sup>2</sup>×w) | Find a way to transform Word1 to Word2 using dictionary and 1 max allowed letter change at a time          |
| [Longest Consecutive Sequence](problems/longest-consecutive-sequence)                        | 5*    | O(n)/O(n)                             | Given an unsorted array of integers, find the length of the longest consecutive elements sequence          |
| [Count of Smaller Numbers After Self](problems/count-of-smaller-numbers-after-self)          | 5+    | O(n×log(n))/O(n)                      | Return an array of number counts, counting the number of smaller elements after the current one            |
| [Burst Balloons](problems/burst-balloons) (Divide & Conquer)                                 | 5+    | O(n<sup>3</sup>)/O(n<sup>2</sup>)     | Given an array of numbers, remove a number one by one to get the maximum sum of adjacent numbers product   |

Test All Problems
-----------------

All problems are covered by unit tests. Test them using:

```bash
npm test
```