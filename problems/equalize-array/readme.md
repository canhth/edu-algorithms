# Equalize Array

You are given an array of numbers and infinite amount of rounds. At one round, you are allowed to
"freeze" any particular number in the array and increase all others, "non-frozen" numbers by the
number of your choice `X`. `X` is chosen by you before the rounds starts and can be `1`, `2` or `5`.

Your goal is to find the **minimal number of rounds** required to make all the numbers in the array
**equal**.

Example
-------

You are given an array `[5, 3, 4]`. The answer here would be 2, because:

```javascript
[5, 3, 4] // Round 0: freeze value at index 0 and add 2 to other values
[5, 5, 6] // Round 1: freeze value at index 2 and add 1 to other values
[6, 6, 6] // Done in 2 rounds
```

Another example with `[5, 2, 1, 9, 3]`, on of the possible ways to solve this:

```javascript
[5,  2,  1,  9,  3 ] // 0: index 3, add 5
[10, 7,  6,  9,  8 ] // 1: index 0, add 2
[10, 9,  8,  11, 10] // 2: index 3, add 2
[12, 11, 10, 11, 12] // 3: index 4, add 2
[14, 13, 12, 13, 12] // 4: index 0, add 2
[14, 15, 14, 15, 14] // 5: index 1, add 1
[15, 15, 15, 16, 15] // 6: index 3, add 1
[16, 16, 16, 16, 16] // 7: done in 7 rounds
```

---

[Problem Source](https://www.hackerrank.com/challenges/equal/problem).