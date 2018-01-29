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

| Problem Name                                                                                 | Level | Complexity                            | Short Description                                                                                             |
|----------------------------------------------------------------------------------------------|-------|---------------------------------------|---------------------------------------------------------------------------------------------------------------|
| [Heap Sort](problems/heap-sort)                                                              | B/3   | O(n×log(n))/O(1)                      | Perform a heap sort                                                                                           |
| [Hamming Distance](problems/hamming-distance)                                                | 1     | O(n)/O(1)                             | Find a number of different bits in two positive integers                                                      |
| [Look and Say](problems/look-and-say)                                                        | 1     | O(2^n)/O(2^n)                         | Generate N number of look-and-say sequence from the given seed                                                |
| [Reverse a Linked List](problems/reverse-linked-list)                                        | 1     | O(n)/O(1)                             | Just reverse a linked list                                                                                    |
| [Remove Duplicates in a Sorted Array](problems/remove-duplicates-in-sorted-array)            | 1     | O(n)/O(1)                             | Efficiently remove duplicates from a sorted array                                                             |
| [Doubly Linked List Insertion](problems/doubly-linked-list-insertion)                        | 1     | O(n)/O(1)                             | Insert a new element to doubly linked list in such way to keep the list sorted                                |
| [Self-Dividing Numbers](problems/self-dividing-number)                                       | 1     | O(n)/O(1)                             | Detect whether the number can be divided by all the digits it includes                                        |
| [Pair Sum](problems/pair-sum)                                                                | 1     | O(n)/O(n)                             | Find two numbers from the array which add up to a given number                                                |
| [Hoppable Array](problems/is-hoppable)                                                       | 2     | O(n<sup>2</sup>)/O(n)                 | Given an array of numbers (numbers of positions you can hop right), return if the array can be passed         |
| [Strobogrammatic numbers](problems/strobogrammatic-number)                                   | 2     | Several                               | Check for and generate specific type of numbers (which look same rotated 180 deg)                             |
| [Numpad Letter Combinations](problems/numpad-letter-combinations)                            | 2     | O(n!)/O(n!)                           | Get all possible letter combinations seeded by a numbers on a num pad of the old phone                        |
| [Remove Nth from the End](problems/remove-nth-from-the-end)                                  | 2     | O(n)/O(1)                             | Remove `n`th element from the end of the list in one pass                                                     |
| [Count Bits from 0 to N](problems/count-bits-from-0-to-n)                                    | 2*    | O(n)/O(n)                             | Return the array of 1s number in bits of each integer from 0 to N                                             |
| [Rectangles Overlap](problems/rectangles-overlap)                                            | 2*    | O(1)/O(1)                             | Given two rectangles, find a rectangle which overlap both                                                     |
| [Binary Tree Inorder Traversal](problems/binary-tree-inorder-traversal)                      | 3     | O(n)/O(log(n))                        | Traverse a binary tree using non-recursive solution                                                           |
| [Course Schedule](problems/course-schedule) (DFS)                                            | 3     | O(n+m)/O(n)                           | Given a schedule of subjects and prerequisites to learn, find out whether it is possible to learn them        |
| [Container with the Most Water](problems/container-with-most-water)                          | 3     | O(n)/O(1)                             | Given an array of rod heights, determine the max area which can hold water between exactly two rods           |
| [Friend circles](problems/friend-circles)                                                    | 3     | O(n<sup>2</sup>)/O(n)                 | Given a matrix of the friendship relations determine how many groups there are of friends who know each other |
| [Generate Parentheses](problems/generate-parentheses)                                        | 3     | O(2<sup>n</sup>)/O(n)                 | Given a number of parentheses pairs, generate all their possible placements                                   |
| [Longest Valid Parentheses](problems/longest-valid-parentheses)                              | 3     | O(n)/O(n)                             | Find the length of the longest valid parentheses in a string                                                  |
| [Maximum Subarray](problems/maximum-subarray)                                                | 3     | O(n)/O(1)                             | Get the maximum possible sum of a continuous sub array in array                                               |
| [Spiral Matrix](problems/spiral-matrix)                                                      | 3     | O(n)/O(n)                             | Having 2D matrix with N elements, output it in spiral order                                                   |
| [Search in Rotated Array](problems/search-in-rotated-array)                                  | 3     | O(log(n))/O(1)                        | Given a sorted array which is rotated at some point, search for a number in it                                |
| [Triplet Sum](problems/triplet-sum)                                                          | 3     | O(n<sup>2</sup>)/O(n)                 | Find three numbers from the array which add up to a given number                                              |
| [Word Break](problems/word-break)                                                            | 3     | O(n<sup>2</sup>)/O(max(n, ds))        | Having a dictionary of words, determine whether the given word can be created from these words                |
| [Top K Frequent Elements](problems/top-k-frequent-elements)                                  | 3     | O(n)/O(n)                             | Given an array, output its top K most frequent elements                                                       |
| [Unique Binary Search Trees](problems/unique-binary-search-trees) (DP)                       | 3     | O(n<sup>2</sup>)/O(n)                 | Find how many unique binary search trees can you build out from the given number of the tree nodes (unique)   |
| [Maximum Indivisible Set in Range](problems/maximum-indivisible-set-in-range)                | 3*    | O(n)/O(n)                             | Find a longest set of mutually indivisible integers in a given range                                          |
| [Frog Jump](problems/frog-jump) (DP)                                                         | 4     | O(n<sup>2</sup>)/O(n<sup>2</sup>)     | Find out whether frog can cross the river by jumping through the given stones                                 |
| [Queue Reconstruction by Height](problems/reconstruct-queue)                                 | 4     | O(n<sup>2</sup>)/O(n)                 | Find order for unordered items in an array after their shuffling                                              |
| [Serialize Binary Tree](problems/serialize-binary-tree)                                      | 4     | O(n)/O(n)                             | Write function to serialize and deserialize binary tree effectively                                           |
| [Equalize Array](problems/equalize-array)                                                    | 4*    | O(n)/O(1)                             | Make all the numbers in the array equal by doing certain operations                                           |
| [Products of Array Except i-th Element](problems/products-of-array-except-ith-element) (DP)  | 4*    | O(n)/O(1)                             | Given an array of integers, get an array of products of all the integers except i-th one without division     |
| [Longest Increasing Path in a Matrix](problems/longest-increasing-path-in-a-matrix) (BFS+DP) | 5     | O(n<sup>2</sup>)/O(n<sup>2</sup>)     | Given an integer matrix, find the length of the longest increasing path                                       |
| [Combination Sum](problems/combination-sum)                                                  | 5     | O(n×m)/O(n×m)                         | Get all unique combinations from a given set which add up to a given number                                   |
| [Count Swaps to Sort](problems/count-swaps-to-sort)                                          | 5     | O(n×log(n))/O(n)                      | Count the number of swaps of adjacent elements required to sort the array                                     |
| [The Shortest Path of Friendship](problems/shortest-path-of-friendship)                      | 5     | O(n+m)/O(n)                           | Given a friends graph, return all shortest paths from one friend to another                                   |
| [Running Median](problems/running-median)                                                    | 5     | O(n×log(n))/O(n)                      | Return N numbers which represent the medians of the sorted array, formed from each 0..N input array           |
| [Sliding Window Maximum](problems/sliding-window-maximum)                                    | 5     | O(n)/O(k)                             | Taking k elements from the array while going from left to right by i += 1, return the array of maximums       |
| [Minimum Window Substring](problems/minimum-window-substring)                                | 5     | O(n)/O(t)                             | Given a string S and a string T, find the minimum window in S which will contain all the characters in T      |
| [Skyline](problems/skyline)                                                                  | 5     | O(n×log(n))/O(n)                      | Given an array of buildings in 2D, determine their silhouette shape                                           |
| [Test Regular Expression](problems/test-regular-expression) (Recursive)                      | 5     | O(n<sup>2</sup>)/O(n)                 | Test whether string matches regular expression with `.`, `*` and letters                                      |
| [Trapping Rain Water](problems/trapping-rain-water)                                          | 5     | O(n)/O(1)                             | Compute how much water it is able to trap after raining                                                       |
| [Word Ladder](problems/word-ladder) (DFS, BFS)                                               | 5     | O(n<sup>2</sup>×w)/O(n<sup>2</sup>×w) | Find a way to transform Word1 to Word2 using dictionary and 1 max allowed letter change at a time             |
| [Permutations Generator](problems/permutations-generator)                                    | 5     | O(n!)/O(1)                            | Generate all possible permutations of a characters in a string                                                |
| [Next Permutation](problems/next-permutation)                                                | 5     | O(n)/O(1)                             | Find a next lexicographically ordered permutation of a given string                                           |
| [Longest Consecutive Sequence](problems/longest-consecutive-sequence)                        | 5*    | O(n)/O(n)                             | Given an unsorted array of integers, find the length of the longest consecutive elements sequence             |
| [Count of Smaller Numbers After Self](problems/count-of-smaller-numbers-after-self)          | 5+    | O(n×log(n))/O(n)                      | Return an array of number counts, counting the number of smaller elements after the current one               |
| [Burst Balloons](problems/burst-balloons) (Divide & Conquer)                                 | 5+    | O(n<sup>3</sup>)/O(n<sup>2</sup>)     | Given an array of numbers, remove a number one by one to get the maximum sum of adjacent numbers product      |

Test All Problems
-----------------

All problems are covered by unit tests. Test them using:

```bash
npm test
```
