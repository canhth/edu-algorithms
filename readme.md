# Algorithmic Problems and their JavaScript Solutions

[![npm](https://travis-ci.org/ZitRos/edu-algorithms.svg?branch=master)](https://travis-ci.org/ZitRos/edu-algorithms)

Algorithmic problems and their solutions. This repository is for educational purposes.

Problems
--------

| Column            | Description                                                                |
|-------------------|----------------------------------------------------------------------------|
| Problem Name      | A short recognizable problem name.                                         |
| Level             | Opinionated problem level 0-5 (lower-higher), * stands for tricky solution |
| Complexity        | Solution complexity level (time/space)                                     |
| Short Description | A short description of the problem                                         | 

| Problem Name                                                                  | Level | Complexity                            | Short Description                                                                                 |
|-------------------------------------------------------------------------------|-------|---------------------------------------|---------------------------------------------------------------------------------------------------|
| [Strobogrammatic numbers](problems/strobogrammatic-number)                    | 2     | Several                               | Check for and generate specific type of numbers (look same rotated 180 deg)                       |
| [Maximum Indivisible Set in Range](problems/maximum-indivisible-set-in-range) | 3*    | O(n)/O(n)                             | Find a longest set of mutually indivisible integers in a given range                              |
| [Frog Jump](problems/frog-jump)                                               | 4     | O(n<sup>2</sup>)/O(n<sup>2</sup>)     | Find out whether frog can cross the river by jumping through the given stones                     |
| [Equalize Array](problems/equalize-array)                                     | 4*    | O(n)/O(1)                             | Make all the numbers in the array equal by doing certain operations                               |
| [Word Ladder](problems/word-ladder)                                           | 5     | O(n<sup>2</sup>×w)/O(n<sup>2</sup>×w) | Find a way to transform Word1 to Word2 using dictionary and 1 max allowed letter change at a time |

Test All Problems
-----------------

All problems are covered by unit tests. Test them using:

```bash
npm test
```